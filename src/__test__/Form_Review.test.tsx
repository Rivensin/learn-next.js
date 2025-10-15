import FormReview from '@/app/review/form/page'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { mockedUseSession } from './test-utils/setupTest'  
import { routerPushMock, routerBackMock } from './test-utils/setupTest'

describe('Form Review', () => {
  beforeEach(() => {
    mockedUseSession.mockReturnValue({
      data: {
        user: {
          email: 'test@example.com',
          name: 'Test User',
          image: 'https://example.com/image.jpg',
          hasReview: false,
        },
      },
      status: 'authenticated',
    })

    render(<FormReview />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render page and each element', () => {
    expect(screen.getByText(/reviews form/i)).toBeInTheDocument() 
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/review/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i})).toBeInTheDocument()
  })

  it('menampilkan error ketika rating belum di isi', async() => {
    fireEvent.change(screen.getByLabelText(/rating/i)),{
      target : { value: 0}
    }

    fireEvent.click(screen.getByRole('button', { name: /submit/i}))

    await waitFor(() => {
      expect(screen.getByText(/rating perlu di isi/i)).toBeInTheDocument()
    })
  })

  it('mengirim data dan berhasil redirect ke /review', async() => {

    fireEvent.input(screen.getByLabelText(/review/i),{
      target: { value: 'enak banget'}
    })

    fireEvent.change(screen.getByLabelText(/rating/i),{
      target: { value: 5}
    })
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i}))
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/review/addReview'),
        expect.objectContaining({
        method: 'POST',
      })
      )
      expect(routerPushMock).toHaveBeenCalledWith('/review')
    })
  })

  it('click button back', async() => {
    fireEvent.click(screen.getByRole('button', {name : /back/i }))
    await waitFor(() => {
      expect(routerBackMock).toHaveBeenCalled()
    })
  })
})