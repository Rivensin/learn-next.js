import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/test-utils/setupTest.ts'],
  collectCoverage: true, // ✅ Enable coverage collection
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [ // ✅ Specify what to include in coverage
    'src/**/*.{js,ts,jsx,tsx}',
    '!src/app/api/**',
    '!src/lib/**',
    '!src/components/**',
    '!src/services/**',
    '!src/**/loading.tsx',
    '!src/**/layout.tsx',
    '!src/middleware/**',
    '!src/middleware.ts'], 
  testMatch: ['**/__tests__/**/*.(spec|test).ts?(x)', '**/?(*.)+(spec|test).ts?(x)'], // ✅ Optional: match test files explicitly
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/', '/build/', '/coverage/'],
}

export default createJestConfig(config)
