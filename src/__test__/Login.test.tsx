import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor, getByRole } from "@testing-library/react"
import { mockedSignIn, routerPushMock } from './test-utils/setupTest'
import LoginPage from '@/app/(auth)/login/page'

describe('Login Page', () => {
  beforeEach(() => jest.clearAllMocks())

  it('Login function success', async() => {
    mockedSignIn.mockReturnValue({error: null})
    render(<LoginPage />)
  
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target : { value : 'example@gmail.com'}
    })

    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target : { value : 'example123'}
    })

    const login = screen.getByRole('form', {name: /login form/i})
    fireEvent.submit(login)

    await waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalledWith('credentials',{
        redirect: false,
        email: 'example@gmail.com',
        password: 'example123',
        callbackUrl: '/review/form'
      }
      )
      expect(routerPushMock).toHaveBeenCalledWith('/review/form')
    })
  })

  it('Login function failed', async() => {
    mockedSignIn.mockReturnValue({
      error: 'invalid credentials',
      status: 401,
      ok: false,
      url: null
    })
    render(<LoginPage />)
  
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target : { value : 'example@gmail.com'}
    })

    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target : { value : 'example123'}
    })

    const login = screen.getByRole('form', {name: /login form/i})
    fireEvent.submit(login)

    await waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalledWith('credentials',{
        redirect: false,
        email: 'example@gmail.com',
        password: 'example123',
        callbackUrl: '/review/form'
      }
      )
      expect(screen.getByText(/Email or Password is Incorrect!/i)).toBeInTheDocument()
    })
  })
})