import '@testing-library/jest-dom'
import { screen, render, fireEvent } from "@testing-library/react"
import Footer from '@/app/footer'

describe('Footer Page', () => {
  beforeEach(() => jest.clearAllMocks())

  it('render Footer Page Whatsapp Link correct', () => {
    render(<Footer />)
    const whatsApp = screen.getByRole('link', {name: /Order by WhatsApp!/i})
    
    expect(whatsApp).toBeInTheDocument()
    expect(whatsApp).toHaveAttribute('href','https://wa.me/+6281374956263')
  })

  it('render Footer Page Nav Link correct', () => {
    render(<Footer />)
    const instagram = screen.getByRole('link', {name: /Order by Instagram!/i})
    
    expect(instagram).toBeInTheDocument()
    expect(instagram).toHaveAttribute('href','https://instagram.com/dlooti_')
  })

  it('render Footer Page Nav Link correct', () => {
    render(<Footer />)
    const aboutUs = screen.getByRole('link', {name: /About Us/i})
    const location = screen.getByRole('link', {name: /Location/i})
    const review = screen.getByRole('link', {name: /Review/i})
    
    expect(aboutUs).toHaveAttribute('href','/about')
    expect(location).toHaveAttribute('href','/outlet')
    expect(review).toHaveAttribute('href','/review')
  })
  
})