import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Review from "@/app/review/page"
import { mockedSignIn, mockedSignOut, mockedSWR, mockedUseSession } from "./test-utils/setupTest"

describe('Review', () => {
  beforeAll(() => {
    mockedSWR.mockReturnValue({
      data: {
        status: 200,
        message: 'success',
        data: [
          {
            desc: "Awalnya nggak berekspektasi tinggi, tapi ternyata enaaakk banget! Krimnya nggak bikin eneg, kuenya moist, dan rasa cokelatnya dapet. Pas banget buat yang nggak suka kue terlalu manis. Pokoknya puas banget deh.",
            email: "tamara@gmail.com",
            image: "/profile/profile.png",
            name: "Tamara",
            rating: "4",
            tanggal: "2025-08-01T16:34:39.100Z",
            id: 1
          }
        ]
      },
      error: undefined,
      isLoading: false
    })

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

  it('Click Logout in Page', async() => {
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
    fireEvent.click(screen.getByRole('button', {name: /logout/i}))

    waitFor(() => {
      expect(mockedSignOut).toHaveBeenCalled()
    })
  })

  it('Click Login in Page', async() => {
    mockedUseSession.mockReturnValue({
      data: null,
      status: 'unauthenticated'
    })

    render(<Review />)
    fireEvent.click(screen.getByRole('button', {name: /Login to Review/i}))

    waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalled()
    })
  })

  it('Check data fetch', () => {
    render(<Review />)
    expect(screen.getByText(/Awalnya nggak berekspektasi tinggi, tapi ternyata enaaakk banget! Krimnya nggak bikin eneg, kuenya moist, dan rasa cokelatnya dapet. Pas banget buat yang nggak suka kue terlalu manis. Pokoknya puas banget deh./i)).toBeInTheDocument()
    expect(screen.getByText(/tamara/i)).toBeInTheDocument()
    expect(screen.getByText(/01.*08.*2025/)).toBeInTheDocument()
    expect(screen.getByAltText('4')).toBeInTheDocument()
    expect(screen.getByAltText('/profile/profile.png')).toBeInTheDocument()
  })

  it('Check data error fetch', () => {
    mockedSWR.mockReturnValue({
      data: {
        status: 200,
        message: 'success',
        data: []
      },
      error: 'Error',
      isLoading: false
    })

    render(<Review />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })

  it('Check data loading fetch', () => {
    mockedSWR.mockReturnValue({
      data: {
        status: 200,
        message: 'success',
        data: [
          {
            desc: "Awalnya nggak berekspektasi tinggi, tapi ternyata enaaakk banget! Krimnya nggak bikin eneg, kuenya moist, dan rasa cokelatnya dapet. Pas banget buat yang nggak suka kue terlalu manis. Pokoknya puas banget deh.",
            email: "tamara@gmail.com",
            image: "/profile/profile.png",
            name: "Tamara",
            rating: "4",
            tanggal: "2025-08-01T16:34:39.100Z",
            id: 1
          }
        ]
      },
      isLoading: true
    })

    render(<Review />)
    const skeleton = screen.getAllByTestId(/skeleton/i) 
    expect(skeleton).toHaveLength(1)
  })
})