/**
 * Integration test for application entry point
 *
 * Tests the entry point initialization by verifying:
 * - dotenv.config() is called to load environment variables
 * - Logger startup message is emitted with correct environment
 */

// Mock modules at the top level for reliable isolation
jest.mock("dotenv")
jest.mock("@/lib/env", () => ({ default: {} }))
jest.mock("@/lib/logger", () => ({
	logger: { info: jest.fn() }
}))

describe("Application Entry Point", () => {
	beforeEach(() => {
		jest.resetModules()
		jest.clearAllMocks()
	})

	it("should call dotenv.config on startup", async () => {
		const dotenv = await import("dotenv")
		const envModule = await import("@/lib/env")

		// Set up mocked env value
		;(envModule.default as Record<string, unknown>).NODE_ENV = "production"

		// Re-import index to trigger initialization
		jest.isolateModules(() => {
			require("@/index")
		})

		expect(dotenv.config).toHaveBeenCalled()
	})

	it("should log startup message with environment", async () => {
		const envModule = await import("@/lib/env")
		const loggerModule = await import("@/lib/logger")

		// Set up mocked env value
		;(envModule.default as Record<string, unknown>).NODE_ENV = "test"

		jest.isolateModules(() => {
			require("@/index")
		})

		expect(loggerModule.logger.info).toHaveBeenCalledWith(
			{ env: "test" },
			"Application started"
		)
	})

	it("should default to development when NODE_ENV is not set", async () => {
		const envModule = await import("@/lib/env")
		const loggerModule = await import("@/lib/logger")

		// Set NODE_ENV to undefined
		;(envModule.default as Record<string, unknown>).NODE_ENV = undefined

		jest.isolateModules(() => {
			require("@/index")
		})

		expect(loggerModule.logger.info).toHaveBeenCalledWith(
			{ env: "development" },
			"Application started"
		)
	})
})
