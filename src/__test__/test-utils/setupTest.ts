import '@testing-library/jest-dom'
import { signIn, useSession, signOut } from 'next-auth/react'
import useSWR from 'swr'

//Mock UseSession
jest.mock('next-auth/react', () => ({
  __esModule: true,
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(),
}))

export const mockedUseSession = useSession as jest.Mock
export const mockedSignIn = signIn as jest.Mock
export const mockedSignOut = signOut as jest.Mock

//supaya fetch() tidak beneran call API.
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
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

