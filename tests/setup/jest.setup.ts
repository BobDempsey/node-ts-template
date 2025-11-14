// Jest setup file for global test configuration
import { jest } from "@jest/globals"

// Set test environment variables
process.env.NODE_ENV = "test"
process.env.PORT = "0" // Use random port for tests

// Global test timeout
jest.setTimeout(10000)

// Mock console methods to reduce test output noise
const originalConsoleLog = console.log
const originalConsoleError = console.error

beforeAll(() => {
  // Optionally suppress console output during tests
  // Uncomment the lines below to silence console output
  // console.log = jest.fn();
  // console.error = jest.fn();
})

afterAll(() => {
  // Restore console methods
  console.log = originalConsoleLog
  console.error = originalConsoleError
})
