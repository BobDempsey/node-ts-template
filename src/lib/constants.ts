/**
 * Application constants and enums
 */

export const NODE_ENV_VALUES = [
	"development",
	"production",
	"test",
	"staging"
] as const

export const LOG_LEVEL_VALUES = ["debug", "info", "warn", "error"] as const

export const GREETING: string = "Hello, TypeScript Node.js World!"

export type NodeEnv = (typeof NODE_ENV_VALUES)[number]
export type LogLevelValue = (typeof LOG_LEVEL_VALUES)[number]
