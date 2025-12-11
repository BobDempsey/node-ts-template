/**
 * Custom error classes for standardized error handling
 */

export class AppError extends Error {
	public readonly statusCode: number
	public readonly isOperational: boolean

	constructor(message: string, statusCode = 500, isOperational = true) {
		super(message)
		this.name = this.constructor.name
		this.statusCode = statusCode
		this.isOperational = isOperational
		Error.captureStackTrace(this, this.constructor)
	}
}

export class ValidationError extends AppError {
	constructor(message: string) {
		super(message, 400)
	}
}

export class NotFoundError extends AppError {
	constructor(message = "Resource not found") {
		super(message, 404)
	}
}

export class UnauthorizedError extends AppError {
	constructor(message = "Unauthorized") {
		super(message, 401)
	}
}
