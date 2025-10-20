import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react"
import { mockedSWR, useParamsMock } from './test-utils/setupTest'
import DetailProductPage from '@/app/product/@modal/(.)detail/[id]/page'

describe('Detail Product Page', () => {
  beforeAll(() => {
    mockedSWR.mockReturnValue({
      data : {
        data : 
          {
            id: 1,
            category: 'burnt-cheese-cake',
            image: '/product/burnt-cheese-cake/burnt-cheese-cake-brownie-(20x10).jpeg',
            name: 'Burnt Cheese Cake Brownie (20x10)'
          },
      },
      error: null,
      isLoading: false
    })

    useParamsMock.mockReturnValue({id: 1})
  })
  beforeEach(() => jest.clearAllMocks())

  it('render product detail based on params id', async() => {
    
    render(<DetailProductPage />)
  
    const img = await screen.findByAltText(/Burnt Cheese Cake Brownie \(20x10\)/i)

    expect(img).toBeInTheDocument()
  })
})