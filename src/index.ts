import { randomUUID } from "crypto"
import dotenv from "dotenv"
import { createServer } from "http"
import { GREETING } from "@/lib/constants"
import env from "@/lib/env"
import { logger } from "@/lib/logger"

dotenv.config()
const PORT: number = env.PORT ?? 3000
const SHUTDOWN_TIMEOUT = 10000
let shutdownTimer: NodeJS.Timeout | null = null

const server = createServer((req, res) => {
	// Generate or propagate request ID for tracing
	const requestId = req.headers["x-request-id"]?.toString() || randomUUID()
	res.setHeader("X-Request-Id", requestId)

	// Health check endpoint
	if (req.url === "/health") {
		res.writeHead(200, { "Content-Type": "application/json" })
		res.end(
			JSON.stringify({ status: "ok", timestamp: new Date().toISOString() })
		)
		return
	}

	res.writeHead(200, { "Content-Type": "text/plain" })
	res.end(GREETING)
})

// Handle server errors
server.on("error", (err: NodeJS.ErrnoException) => {
	if (err.code === "EADDRINUSE") {
		logger.error(`❌ Port ${PORT} is already in use`)
		process.exit(1)
	}
	logger.error(`❌ Server error: ${err.message}`)
	process.exit(1)
})

server.listen(PORT, () => {
	logger.info(`🚀 Server is running on http://localhost:${PORT}`)
	logger.info(`📁 Environment: ${env.NODE_ENV || "development"}`)
})

// Graceful shutdown with timeout
const shutdown = (signal: string) => {
	logger.info(`🔄 ${signal} received, shutting down gracefully...`)
	server.close(() => {
		logger.info("✅ Process terminated")
		process.exit(0)
	})

	// Force exit after timeout if connections don't close
	shutdownTimer = setTimeout(() => {
		logger.error("❌ Forced shutdown after timeout")
		process.exit(1)
	}, SHUTDOWN_TIMEOUT)
	shutdownTimer.unref()
}

// Signal handlers
const sigTermHandler = () => shutdown("SIGTERM")
const sigIntHandler = () => shutdown("SIGINT")
const sigHupHandler = () => shutdown("SIGHUP")

process.on("SIGTERM", sigTermHandler)
process.on("SIGINT", sigIntHandler)
process.on("SIGHUP", sigHupHandler)

// Uncaught exception handling
const uncaughtExceptionHandler = (err: Error) => {
	logger.error(`❌ Uncaught exception: ${err.message}`)
	process.exit(1)
}

const unhandledRejectionHandler = (reason: unknown) => {
	logger.error(`❌ Unhandled rejection: ${reason}`)
	process.exit(1)
}

process.on("uncaughtException", uncaughtExceptionHandler)
process.on("unhandledRejection", unhandledRejectionHandler)

// Export cleanup function for testing
export const cleanup = () => {
	process.removeListener("SIGTERM", sigTermHandler)
	process.removeListener("SIGINT", sigIntHandler)
	process.removeListener("SIGHUP", sigHupHandler)
	process.removeListener("uncaughtException", uncaughtExceptionHandler)
	process.removeListener("unhandledRejection", unhandledRejectionHandler)
	if (shutdownTimer) {
		clearTimeout(shutdownTimer)
		shutdownTimer = null
	}
}

export default server
