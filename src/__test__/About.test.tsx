import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../app/about/page'
import AboutLayout from '../app/about/layout'
 
describe('About Page', () => {
  it('it should render', () => {
    const page = render(
    <AboutLayout>
      <About />
    </AboutLayout>
    ) 
    expect(page).toMatchSnapshot()
    // const heading = screen.getByRole('heading', { level: 1 })
 
    //expect(heading).toBeInTheDocument()
  })

  it('it should render a heading', () => {
    render(<About />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})