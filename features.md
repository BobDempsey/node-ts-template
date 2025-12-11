# Features

## Core Framework
- **Express.js 5.x** web framework
- **TypeScript** with strict type checking (ES2020 target)
- **Node.js 24+** runtime requirement
- **Path aliases** (`@/*`) for clean imports

## Security
- **Helmet.js** for HTTP security headers
- **CORS** with environment-based configuration
- **Rate limiting** (configurable window and max requests)
- **JWT authentication** (optional, feature-flagged)
  - Access and refresh tokens
  - Token verification and validation
- **Request validation** via Zod schemas

## Authentication Routes
- `POST /api/v1/auth/login` - Login with email/password
- `POST /api/v1/auth/refresh` - Refresh access token
- `GET /api/v1/auth/me` - Get authenticated user info
- Pluggable user service interface

## Logging & Monitoring
- **Pino logger** with structured JSON output
- Pretty-print logs in development
- Request logging (method, path, status, duration)
- **Request ID tracing** (X-Request-Id header)
- Sensitive data redaction (auth headers, passwords)

## Error Handling
- Centralized error handler middleware
- Custom error classes (AppError, ValidationError, NotFoundError, UnauthorizedError)
- **asyncHandler** utility for promise rejection handling
- Environment-aware error responses

## API Features
- **Standardized API response envelope** (`sendSuccess`/`sendError`)
- **Health check endpoints** (`/health`, `/ready`, `/live`)
- API versioning (`/api/v1/`)
- **Swagger/OpenAPI** documentation at `/docs`

## Environment Configuration
- Zod-based environment validation
- Configurable: PORT, CORS_ORIGIN, LOG_LEVEL, rate limits, JWT settings
- `.env.example` template provided

## Graceful Shutdown
- Multi-signal handling (SIGTERM, SIGINT, SIGHUP)
- Connection draining with configurable timeout
- Uncaught exception/rejection handling
- Kubernetes/Docker compatible

## Testing
- **Jest** with TypeScript support
- **Supertest** for HTTP assertions
- Unit and integration test directories
- Coverage reporting (text, lcov, html)
- VS Code REST Client file for manual testing

## Code Quality
- **Biome** for linting and formatting
- **Husky** pre-commit hooks
- **lint-staged** integration
- GitHub Actions CI workflows

## Containerization & Deployment
- **Multi-stage Dockerfile** (Alpine Linux)
- **Docker Compose** for local development
- GitHub Actions for test, build, and code quality
- Codecov integration

## Development Experience
- **Hot reload** via Nodemon + ts-node
- VS Code workspace settings and recommended extensions
- npm scripts for dev, build, test, lint, format