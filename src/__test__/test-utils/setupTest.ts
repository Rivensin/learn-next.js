import '@testing-library/jest-dom'
import { useSession } from 'next-auth/react'

//Mock UseSession
jest.mock('next-auth/react', () => ({
  __esModule: true,
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(),
}))

export const mockedUseSession = useSession as jest.Mock

//supaya fetch() tidak beneran call API.
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
) as jest.Mock

//supaya useRouter() tidak benar-benar navigate.

const routerPushMock = jest.fn()
const routerBackMock = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: routerPushMock, back: routerBackMock })),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}))

//Mock FramerMotion
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

export {routerBackMock, routerPushMock}