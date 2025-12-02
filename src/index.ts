import { createServer } from "http"
import "./lib/env"
import dotenv from "dotenv"
import { GREETING } from "./lib/constants"
import { logger } from "./lib/logger"

dotenv.config()
const PORT: number = Number(process.env.PORT) || 3000

const server = createServer((_req, res) => {
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
	logger.info(`📁 Environment: ${process.env.NODE_ENV || "development"}`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
	logger.info("🔄 SIGTERM received, shutting down gracefully...")
	server.close(() => {
		logger.info("✅ Process terminated")
		process.exit(0)
	})
})

export default server
