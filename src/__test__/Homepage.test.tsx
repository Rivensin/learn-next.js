import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react"
import Home from '@/app/page'

describe('Home Page', () => {
  beforeEach(() => jest.clearAllMocks())

  it('render Home Page', () => {
    render(<Home />)
    
    const burntCheeseCake = screen.getByAltText(/BURNT CHEESE CAKE/i)
    const testBurntCheeseCake = burntCheeseCake.closest('a')

    const customCake = screen.getByAltText(/CUSTOM CAKE/i)
    const testCustomCake = customCake.closest('a')

    const fudgybrownie = screen.getByAltText(/FUDGY BROWNIE/i)
    const testFudgybrownie = fudgybrownie.closest('a')

    const softCookies = screen.getByAltText(/SOFT COOKIES/i)
    const testSoftCookies = softCookies.closest('a')

    const tiramisuCake = screen.getByAltText(/TIRAMISU CAKE/i)
    const testTiramisuCake = tiramisuCake.closest('a')

    expect(testBurntCheeseCake).toHaveAttribute('href','/product/burnt-cheese-cake')
    expect(testCustomCake).toHaveAttribute('href','/product/custom-cake')
    expect(testFudgybrownie).toHaveAttribute('href','/product/fudgy-brownie')
    expect(testSoftCookies).toHaveAttribute('href','/product/soft-cookies')
    expect(testTiramisuCake).toHaveAttribute('href','/product/tiramisu-cake')
  })

  
})