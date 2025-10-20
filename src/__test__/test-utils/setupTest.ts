import '@testing-library/jest-dom'
import { signIn, useSession, signOut } from 'next-auth/react'
import useSWR from 'swr'

//Mock UseSession
export const mockedUseSession = jest.fn()
export const mockedSignIn = jest.fn()
export const mockedSignOut = jest.fn()

jest.mock('next-auth/react', () => ({
  __esModule: true,
  useSession: mockedUseSession,
  signIn: mockedSignIn,
  signOut: mockedSignOut
}))

//supaya fetch() tidak beneran call API.
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({}),
  })
) as jest.Mock

//useSwr()

jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(),
}));

export const mockedSWR = useSWR as jest.Mock

//supaya useRouter() tidak benar-benar navigate.

export const routerPushMock = jest.fn()
export const routerBackMock = jest.fn()
export const routerReplaceMock = jest.fn()
export const useParamsMock = jest.fn()
export const usePathnameMock = jest.fn()


jest.mock('next/navigation', () => ({
  useParams: useParamsMock,
  useRouter: jest.fn(() => ({ push: routerPushMock, back: routerBackMock, replace: routerReplaceMock })),
  usePathname: usePathnameMock,
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

