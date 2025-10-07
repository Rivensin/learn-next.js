import FormReview from '@/app/review/form/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { usePathname, useSearchParams } from 'next/navigation'

jest.mock('next-auth/react', () => ({
  __esModule: true,
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(), // <--- ini kuncinya
}))

jest.mock('next/navigation', () => ({
  useRouter:() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn()
  }),
  usePathname: () => '/review/form',
  useSearchParams: () => ({
    get: jest.fn()
  })
}))

const mockedUseSession = useSession as jest.Mock

describe('Form Review', () => {
  beforeAll(() => {
    class MockIntersectionObserver {
    root: Element | null = null
    rootMargin: string = ''
    thresholds: ReadonlyArray<number> = []

    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
    takeRecords() { return [] }
  }
    global.IntersectionObserver = MockIntersectionObserver as any
  })

  it('render page', () => {
    mockedUseSession.mockReturnValue({
      data: {
        user: {
          email: 'test@example.com',
          name: 'Test User',
          image: 'https://example.com/image.jpg',
          hasReview: false,
        },
      },
      status: 'authenticated',
    })

   const {getByText} = render(<FormReview />) 
   expect(getByText(/reviews form/i)).toBeInTheDocument()
  })
})