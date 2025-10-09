import FormReview from '@/app/review/form/page'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

//Mock UseSession
jest.mock('next-auth/react', () => ({
  __esModule: true,
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(),
}))

const mockedUseSession = useSession as jest.Mock

//supaya fetch() tidak beneran call API.
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
) as jest.Mock

//supaya useRouter() tidak benar-benar navigate.

const routerPushMock = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: routerPushMock })),
  usePathname: jest.fn(() => '/review/form'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}))

//Mock FramerMotion
class MockIntersectionObserver {
  root: Element | null = null
  rootMargin: string = ''
  thresholds: ReadonlyArray<number> = []

  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
  takeRecords() { return [] }
}

global.IntersectionObserver = MockIntersectionObserver as any

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
    const router = useRouter() as unknown as { push: jest.Mock }

    fireEvent.input(screen.getByLabelText(/review/i),{
      target: { value: 'enak banget'}
    })

    fireEvent.change(screen.getByLabelText(/rating/i),{
      target: { value: 5}
    })
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i}))
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled()
      expect(routerPushMock).toHaveBeenCalledWith('/review')
    })
  })
})