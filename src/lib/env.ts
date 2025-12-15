/**
 * Environment variable schema definition and validation using Zod.
 *
 * This module defines the expected environment variables for the application
 * using Zod schemas, validates them at runtime, and exports a parsed
 * environment object with type safety.
 */
import { z } from "zod"

import tryParseEnv from "@/lib/try-parse-env"

export const NODE_ENV_VALUES = [
	"development",
	"production",
	"test",
	"staging"
] as const

const LOG_LEVELS = ["fatal", "error", "warn", "info", "debug", "trace"] as const

const EnvSchema = z.object({
	NODE_ENV: z.enum(NODE_ENV_VALUES).optional(),
	LOG_LEVEL: z.enum(LOG_LEVELS).default("info").optional()
})

export type EnvSchema = z.infer<typeof EnvSchema>

tryParseEnv(EnvSchema)

export default EnvSchema.parse(process.env)
