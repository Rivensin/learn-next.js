import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react"
import Outlet from '@/app/outlet/page'

describe('Outlet Page', () => {
  beforeEach(() => jest.clearAllMocks())

  it('render outlet page', () => {
    
    render(<Outlet />)
    expect(screen.getByText(/Jl Lily 2 No 49N/i)).toBeInTheDocument()
  })

  
})