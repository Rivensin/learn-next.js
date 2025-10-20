import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react"
import About from '@/app/about/page'

describe('About Page', () => {
  beforeEach(() => jest.clearAllMocks())

  it('render About page', () => {
    
    render(<About />)
    expect(screen.getByText(/Dlooti is a new fresh boutique bakery and pastry shop/i)).toBeInTheDocument()
  })

  
})