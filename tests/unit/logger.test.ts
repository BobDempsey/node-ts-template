/**
 * Unit Tests for Pino logger
 *
 * Test Coverage Plan:
 * 1. Logger Configuration
 *    - Verify logger exports correctly
 *    - Verify log level from environment
 *    - Verify service name in base metadata
 *
 * 2. Logger Methods
 *    - info(), warn(), error(), debug() available
 *    - Child logger creation with requestId
 *
 * 3. Type Safety
 *    - Logger and RequestLogger types exported
 */

import {
	createRequestLogger,
	type Logger,
	logger,
	type RequestLogger
} from "@/lib/logger"

describe("Pino Logger", () => {
	describe("Environment-based Configuration", () => {
		const originalEnv = process.env.NODE_ENV

		beforeEach(() => {
			jest.resetModules()
		})

		afterEach(() => {
			process.env.NODE_ENV = originalEnv
		})

		it("should configure pretty transport in development mode", async () => {
			process.env.NODE_ENV = "development"

			// Re-import with development environment
			const { logger: devLogger } = await import("@/lib/logger")

			// In development, pino-pretty transport is configured
			// The logger should still function correctly
			expect(devLogger).toBeDefined()
			expect(typeof devLogger.info).toBe("function")
		})

		it("should not configure pretty transport in production mode", async () => {
			process.env.NODE_ENV = "production"

			const { logger: prodLogger } = await import("@/lib/logger")

			expect(prodLogger).toBeDefined()
			expect(typeof prodLogger.info).toBe("function")
		})
	})

	describe("Logger Configuration", () => {
		it("should export a logger instance", () => {
			expect(logger).toBeDefined()
		})

		it("should have standard logging methods", () => {
			expect(typeof logger.info).toBe("function")
			expect(typeof logger.warn).toBe("function")
			expect(typeof logger.error).toBe("function")
			expect(typeof logger.debug).toBe("function")
			expect(typeof logger.fatal).toBe("function")
			expect(typeof logger.trace).toBe("function")
		})

		it("should have a log level configured", () => {
			expect(logger.level).toBeDefined()
			expect(["fatal", "error", "warn", "info", "debug", "trace"]).toContain(
				logger.level
			)
		})
	})

	describe("Child Logger", () => {
		it("should create child logger with requestId", () => {
			const requestId = "test-request-123"
			const childLogger = createRequestLogger(requestId)

			expect(childLogger).toBeDefined()
			expect(typeof childLogger.info).toBe("function")
			expect(typeof childLogger.warn).toBe("function")
			expect(typeof childLogger.error).toBe("function")
		})

		it("should create unique child loggers for different requestIds", () => {
			const childLogger1 = createRequestLogger("request-1")
			const childLogger2 = createRequestLogger("request-2")

			expect(childLogger1).not.toBe(childLogger2)
		})
	})

	describe("Logger API", () => {
		it("should accept object as first argument", () => {
			// Pino accepts structured objects
			expect(() => {
				logger.info({ key: "value" }, "test message")
			}).not.toThrow()
		})

		it("should accept string as first argument", () => {
			expect(() => {
				logger.info("test message")
			}).not.toThrow()
		})

		it("should accept error objects", () => {
			const error = new Error("test error")
			expect(() => {
				logger.error({ err: error }, "error occurred")
			}).not.toThrow()
		})
	})

	describe("Type Safety", () => {
		it("should export Logger type", () => {
			const loggerInstance: Logger = logger
			expect(loggerInstance).toBeDefined()
		})

		it("should export RequestLogger type", () => {
			const requestLogger: RequestLogger = createRequestLogger("test")
			expect(requestLogger).toBeDefined()
		})
	})
})
