import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor, within } from "@testing-library/react"
import Navbar from '@/app/navbar'
import { mockedSignOut, mockedUseSession, usePathnameMock } from './test-utils/setupTest'

describe('Navbar Page', () => {
  beforeAll(() => {
    mockedUseSession.mockReturnValue({
      data: {
        user: {
          email: 'test@example.com',
          name: 'Test User',
          image: 'https://example.com/image.jpg',
          hasReview: false,
        },
      },
      status : 'authenticated'
    })


    usePathnameMock.mockReturnValue('/product/burnt-cheese-cake')
  })
  beforeEach(() => jest.clearAllMocks())

  it('Navbar link correct', () => {
    render(<Navbar />)
    const home = screen.getByRole('link', {name: /Home/i})
    const product = screen.getByRole('link', {name: /Product/i})
    const about = screen.getByRole('link', {name: /About/i})
    const outlet = screen.getByRole('link', {name: /Outlet/i})
    const review = screen.getByRole('link', {name: /Review/i})
    
    expect(home).toHaveAttribute('href','/')
    expect(product).toHaveAttribute('href','/product/burnt-cheese-cake')
    expect(about).toHaveAttribute('href','/about')
    expect(outlet).toHaveAttribute('href','/outlet')
    expect(review).toHaveAttribute('href','/review')
  })

  it('Logout button success', async() => {
    render(<Navbar />)
    
    const logout = screen.getByText(/logout/i)
  
    fireEvent.click(logout)
    await waitFor(() => {

    expect(mockedSignOut).toHaveBeenCalled()
    })
  })

  it('hamburger line success', async() => {
    render(<Navbar />)
    const home = screen.getByRole('link', {name: /Home/i})
    const product = screen.getByRole('link', {name: /Product/i})
    const about = screen.getByRole('link', {name: /About/i})
    const outlet = screen.getByRole('link', {name: /Outlet/i})
    const review = screen.getByRole('link', {name: /Review/i})
    
    const buttonHamburgerline = screen.getByTestId(/button-line/i)
    const [hamburgerline] = within(buttonHamburgerline).getAllByTestId(/line/i)
    const imageLine = screen.getByTestId(/image-line/i)

    fireEvent.click(buttonHamburgerline)
    expect(hamburgerline).toHaveClass('w-[30px]')

    fireEvent.click(imageLine)    
    expect(hamburgerline).toHaveClass('w-[18px]')

    fireEvent.click(home)    
    expect(hamburgerline).toHaveClass('w-[18px]')

    fireEvent.click(product)    
    expect(hamburgerline).toHaveClass('w-[18px]')

    fireEvent.click(about)    
    expect(hamburgerline).toHaveClass('w-[18px]')

    fireEvent.click(outlet)    
    expect(hamburgerline).toHaveClass('w-[18px]')
    
    fireEvent.click(review)    
    expect(hamburgerline).toHaveClass('w-[18px]')
    
  })

})