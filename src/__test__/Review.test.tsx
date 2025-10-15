import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Review from "@/app/review/page"
import { mockedUseSession } from "./test-utils/setupTest"

describe('Review', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })
  it('Button after Login', async() => {
    mockedUseSession.mockReturnValue({
      data: {
        user: {
          email: 'test@example.com',
          name: 'Test User',
          image: 'https://example.com/image.jpg',
          hasReview: false,
        },
      },
      status: 'authenticated'
    })

    render(<Review />)

    waitFor(() => {
      expect(screen.getByRole('button', {name : /make a review/i})).toBeInTheDocument()
    })
  })

  it('Button after Login already make a review', async() => {
    mockedUseSession.mockReturnValue({
      data: {
        user: {
          email: 'test@example.com',
          name: 'Test User',
          image: 'https://example.com/image.jpg',
          hasReview: true,
        },
      },
      status: 'authenticated'
    })

    render(<Review />)

    waitFor(() => {
      expect(screen.getByRole('button', {name : /Already review!/i})).toBeInTheDocument()
    })
  })

  it('Button not logged in', async() => {
    mockedUseSession.mockReturnValue({
      data: null,
      status: 'unauthenticated'
    })

    render(<Review />)

    waitFor(() => {
      expect(screen.getByRole('button', {name : /Login to Review!/i})).toBeInTheDocument()
    })
  })
})