import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor, getByRole } from "@testing-library/react"
import Register from '@/app/(auth)/register/page'
import { routerPushMock } from './test-utils/setupTest'

describe('Register Page', () => {
  beforeEach(() => jest.clearAllMocks())

  it('Register success', async() => {
    
    render(<Register />)
    
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
      target : { value : 'example'}
    })

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target : { value : 'example@gmail.com'}
    })

    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target : { value : 'example123'}
    })

    const register = screen.getByRole('form', {name: /register form/i})
    fireEvent.submit(register)

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/auth/register'),
        expect.objectContaining({
          method: 'POST'
        })
      )
      expect(routerPushMock).toHaveBeenCalledWith('/login')
    })
  })

  it('Register failed', async() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock

    render(<Register />)
    
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
      target : { value : 'example'}
    })

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target : { value : 'example@gmail.com'}
    })

    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target : { value : 'example123'}
    })

    const register = screen.getByRole('form', {name: /register form/i})
    fireEvent.submit(register)

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/auth/register'),
        expect.objectContaining({
          method: 'POST'
        })
      )
      expect(screen.getByText(/email already exist/i)).toBeInTheDocument()
    })
  })

  
})