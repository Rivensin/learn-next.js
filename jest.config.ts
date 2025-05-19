import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true, // ✅ Enable coverage collection
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'], // ✅ Specify what to include in coverage
  testMatch: ['**/__tests__/**/*.(spec|test).ts?(x)', '**/?(*.)+(spec|test).ts?(x)'], // ✅ Optional: match test files explicitly
}

export default createJestConfig(config)
