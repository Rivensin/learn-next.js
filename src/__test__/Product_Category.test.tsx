import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor, render } from "@testing-library/react"
import { mockedSWR, routerReplaceMock, useParamsMock } from './test-utils/setupTest'
import ProductPage from '@/app/product/@page/[category]/page'


describe('Product Page', () => {
  beforeAll(() => {
    mockedSWR.mockReturnValue({
      data : {
        data : [
          {
            category: 'burnt-cheese-cake',
            image: '/product/burnt-cheese-cake/burnt-cheese-cake-brownie-(20x10).jpeg',
            name: 'Burnt Cheese Cake Brownie (20x10)'
          },
          {
            category: 'custom-cake',
            image: '/product/custom-cake/custom-cake.jpeg',
            name: 'Custom Cake'
          },
          {
            category: 'fudgy-brownie',
            image: '/product/fudgy-brownie/donut-brownie.jpeg',
            name: 'Donut Brownie'
          },
          {
            category: 'soft-cookies',
            image: '/product/soft-cookies/cookie-birthday-cake.jpeg',
            name: 'Cookie Birthday Cake'
          },
          {
            category: 'tiramisu-cake',
            image: '/product/tiramisu-cake/tiramisu-cake.jpeg',
            name: 'Tiramisu Cake'
          },
        ]
      },
      error: null,
      isLoading: false
    })

    useParamsMock.mockReturnValue({category: 'burnt-cheese-cake'})
  })
  beforeEach(() => jest.clearAllMocks())

  it('render product based on params burnt cheese cake', async() => {
    
    render(<ProductPage />)
  
    const img = await screen.findByAltText(/Burnt Cheese Cake Brownie \(20x10\)/i)
    
    expect(img.getAttribute('src')).toContain('/product/burnt-cheese-cake/')
    
  })

  it('click button custom cake to display product', async() => {
    render(<ProductPage />)
    fireEvent.click(screen.getByRole('button', {name : /Custom Cake/i}))

    const img = await screen.findByAltText(/Custom Cake/i)

    expect(img.getAttribute('src')).toContain('/product/custom-cake/')
    expect(routerReplaceMock).toHaveBeenCalled()
  })

  it('click button fudgy-brownies to display product', async() => {
    render(<ProductPage />)
    fireEvent.click(screen.getByRole('button', {name : /Fudgy Brownies/i}))

    const img = await screen.findByAltText(/Donut Brownie/i)

    expect(img.getAttribute('src')).toContain('/product/fudgy-brownie/')
    expect(routerReplaceMock).toHaveBeenCalled()
  })

  it('click button soft-cookies to display product', async() => {
    render(<ProductPage />)
    fireEvent.click(screen.getByRole('button', {name : /Soft Cookies/i}))

    const img = await screen.findByAltText(/Cookie Birthday Cake/i)

    expect(img.getAttribute('src')).toContain('/product/soft-cookies/')
    expect(routerReplaceMock).toHaveBeenCalled()
  })

  it('click button soft-cookies to display product', async() => {
  render(<ProductPage />)
  fireEvent.click(screen.getByRole('button', {name : /Tiramisu Cake/i}))

  const img = await screen.findByAltText(/Tiramisu Cake/i)

  expect(img.getAttribute('src')).toContain('/product/tiramisu-cake/')
  expect(routerReplaceMock).toHaveBeenCalled()
  })

  it('click button burnt cheese cake from another category', async() => {
  useParamsMock.mockReturnValue({category: 'tiramisu-cake'})
  render(<ProductPage />)
  fireEvent.click(screen.getByRole('button', {name : /Burnt Cheese Cake/i}))
  expect(routerReplaceMock).toHaveBeenCalled()
  })

  it('loading UI', async() => {
  mockedSWR.mockReturnValue({
    data : null,
    error: null,
    isLoading: true
  })
  render(<ProductPage />)
  
  const skeleton = screen.getAllByTestId(/skeleton/i)

  expect(skeleton).toHaveLength(6)
  })
})