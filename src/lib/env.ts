/**
 * Environment variable schema definition and validation using Zod.
 *
 * This module defines the expected environment variables for the application
 * using Zod schemas, validates them at runtime, and exports a parsed
 * environment object with type safety.
 */
import { z } from "zod"

import tryParseEnv from "./try-parse-env"
import { NODE_ENV_VALUES } from "./constants"

const EnvSchema = z.object({
	NODE_ENV: z.enum(NODE_ENV_VALUES).optional(),
	PORT: z
		.string()
		.default("3000")
		.transform((val) => Number.parseInt(val, 10))
		.optional(),
})

export type EnvSchema = z.infer<typeof EnvSchema>

tryParseEnv(EnvSchema)

export default EnvSchema.parse(process.env)
