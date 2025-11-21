import { createServer } from "http"
import "./lib/env"
import dotenv from "dotenv"
import { GREETING } from "./lib/constants"

dotenv.config()
const PORT: number = Number(process.env.PORT) || 3000

const server = createServer((_req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" })
	res.end(GREETING)
})

server.listen(PORT, () => {
	console.log(`🚀 Server is running on http://localhost:${PORT}`)
	console.log(`📁 Environment: ${process.env.NODE_ENV || "development"}`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
	console.log("🔄 SIGTERM received, shutting down gracefully...")
	server.close(() => {
		console.log("✅ Process terminated")
		process.exit(0)
	})
})

export default server
