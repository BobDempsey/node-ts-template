import dotenv from "dotenv"
import env from "@/lib/env"
import { logger } from "@/lib/logger"

dotenv.config()

logger.info({ env: env.NODE_ENV || "development" }, "Application started")
