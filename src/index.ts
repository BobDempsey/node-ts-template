import dotenv from "dotenv"
import { createServer } from "http"
import "./lib/env"

dotenv.config()
const PORT: number = Number(process.env.PORT) || 3000

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello, TypeScript Node.js World!")
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
