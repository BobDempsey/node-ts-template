/**
 * Environment variable schema definition and validation using Zod.
 *
 * This module defines the expected environment variables for the application
 * using Zod schemas, validates them at runtime, and exports a parsed
 * environment object with type safety.
 */
import { z } from "zod"

import tryParseEnv from "./try-parse-env"

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test", "staging"]).optional(),
  PORT: z.number().default(3000).optional(),
})

export type EnvSchema = z.infer<typeof EnvSchema>

tryParseEnv(EnvSchema)

export default EnvSchema.parse(process.env)
