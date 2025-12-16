# Node.js TypeScript Template

[![Test](https://github.com/BobDempsey/node-ts-template/actions/workflows/test.yml/badge.svg)](https://github.com/BobDempsey/node-ts-template/actions/workflows/test.yml)
[![Build](https://github.com/BobDempsey/node-ts-template/actions/workflows/build.yml/badge.svg)](https://github.com/BobDempsey/node-ts-template/actions/workflows/build.yml)
[![Biome Lint and Format](https://github.com/BobDempsey/node-ts-template/actions/workflows/biome.yml/badge.svg)](https://github.com/BobDempsey/node-ts-template/actions/workflows/biome.yml)
[![codecov](https://codecov.io/gh/BobDempsey/node-ts-template/branch/main/graph/badge.svg)](https://codecov.io/gh/BobDempsey/node-ts-template)

A simple and clean Node.js project template with TypeScript support.

## Features

- 🚀 **TypeScript** - Full TypeScript support with strict type checking
- 🔄 **Hot Reload** - Automatic restart on file changes during development
- 📦 **Modern Node.js** - Targets ES2020 and Node.js 24+
- 🛠️ **Development Ready** - Pre-configured build and development scripts
- 🔒 **Type-Safe Environment** - Zod-based environment variable validation and type safety
- 🧪 **Testing Suite** - Jest for unit testing
- 🎨 **Code Quality** - Biome for fast linting and formatting
- 🪝 **Pre-commit Hooks** - Husky and lint-staged for automatic code quality checks
- 📋 **Conventional Commits** - Enforced commit message format with commitlint
- 📝 **Built-in Logger** - Pino logger with structured logging and log levels
- 🔗 **Path Aliases** - TypeScript path aliases (@/*) for cleaner imports

## Project Structure

```
node-ts-template/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
│       ├── test.yml        # Test workflow with coverage
│       ├── build.yml       # Build validation workflow
│       └── biome.yml       # Code quality workflow
├── .husky/                 # Git hooks configuration
├── .vscode/                # VS Code workspace settings
│   ├── extensions.json     # Recommended extensions
│   └── settings.json       # Editor settings
├── src/
│   ├── lib/
│   │   ├── env.ts          # Environment variable schema and validation
│   │   ├── try-parse-env.ts # Zod environment parsing utility
│   │   └── logger.ts       # Pino logger with structured logging
│   └── index.ts            # Main entry point
├── tests/
│   ├── unit/               # Unit tests
│   └── setup/              # Test configuration and utilities
├── coverage/               # Test coverage reports (auto-generated)
├── dist/                   # Compiled JavaScript output (auto-generated)
├── node_modules/           # Dependencies
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
├── biome.json              # Biome linter and formatter configuration
├── commitlint.config.js    # Commit message linting configuration
├── jest.config.ts          # Jest testing configuration
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 24.0.0 or higher
- npm 10.0.0 or higher

### Installation

1. Clone or download this template
2. Navigate to the project directory
3. Install dependencies:

   ```bash
   npm install
   ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

This uses `nodemon` and `ts-node` to run TypeScript directly without compilation. The `tsconfig-paths/register` module is loaded to enable path alias resolution (`@/*`) at runtime. The application automatically restarts when you make changes to the code.

### Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

This compiles TypeScript using `tsconfig.build.json` (which excludes tests) and resolves path aliases in the output using `tsc-alias`. The optimized JavaScript files are created in the `dist/` directory.

### Production

Run the compiled JavaScript in production:

```bash
npm start
```

### Other Commands

- `npm run clean` - Remove the `dist/` directory

### Code Quality

Format and lint your code with Biome:

```bash
npm run format        # Check formatting
npm run format:fix    # Fix formatting issues
npm run lint          # Check for linting issues
npm run lint:fix      # Fix linting issues
npm run check         # Run both linting and formatting checks
npm run check:fix     # Fix both linting and formatting issues
```

### Pre-commit Hooks

This template uses Husky and lint-staged to ensure code quality before commits:

- **Automatic Linting** - Biome automatically checks and fixes issues on staged files
- **Format Enforcement** - Code is formatted consistently before each commit
- **Commit Message Validation** - Commitlint ensures all commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) format
- **Zero Configuration** - Hooks are set up automatically on `npm install`

The pre-commit hook runs `biome check --write` on all staged files, ensuring that only properly formatted and linted code is committed. The commit-msg hook validates that your commit message follows the conventional commit format.

#### Conventional Commit Examples

```bash
feat: add user authentication
fix: resolve login redirect issue
docs: update API documentation
style: format code with prettier
refactor: extract validation logic into separate module
test: add unit tests for user service
chore: update dependencies
build: configure webpack for production
ci: add GitHub Actions workflow
perf: optimize database queries
```

Format: `<type>(<optional scope>): <description>`

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`

### Testing

Run the test suite:

```bash
npm test
```

#### Test Scripts

- **`npm test`** - Run all tests once
- **`npm run test:watch`** - Run tests in watch mode (reruns on file changes)
- **`npm run test:coverage`** - Run tests with coverage report
- **`npm run test:ci`** - Run tests in CI mode (no watch, with coverage)

#### Running Specific Tests

Run a single test file:

```bash
npm test -- tests/unit/env.test.ts --watch
```

Run a specific test case by name:

```bash
npm test -- --testNamePattern="should define correct schema structure" --watch
```

#### Test Structure

The project includes comprehensive testing with Jest:

- **Unit Tests** (`tests/unit/`) - Test individual functions and modules

  - Environment variable validation
  - Zod schema testing
  - Logger functionality

- **Test Utilities** (`tests/setup/`) - Helper functions and configurations
  - Mock environment setup
  - Common test patterns

#### Writing Tests

Create test files with `.test.ts` or `.spec.ts` extensions in the `tests/` directory:

```typescript
// tests/unit/example.test.ts
describe("Example Test", () => {
  it("should pass", () => {
    expect(true).toBe(true)
  })
})
```

Tests automatically have access to:

- Jest testing framework
- TypeScript support
- Environment mocking utilities

## Recommended VS Code Extensions

This project includes recommended VS Code extensions in [.vscode/extensions.json](.vscode/extensions.json). When you open the project in VS Code, you'll be prompted to install them.

### Recommended Extensions

- **Better TypeScript Errors** (`better-ts-errors.better-ts-errors`) - Makes TypeScript error messages more readable and easier to understand
- **Biome** (`biomejs.biome`) - Official Biome extension for linting and formatting with real-time feedback
- **Jest** (`Orta.vscode-jest`) - Integrated Jest testing with inline test results and debugging
- **Path Intellisense** (`christian-kohler.path-intellisense`) - Autocomplete for file paths in your code

## Configuration

### TypeScript Configuration

This project uses two TypeScript configuration files:

#### `tsconfig.json` (Development & Testing)

The main TypeScript configuration for development and testing:

- **Target**: ES2020
- **Module**: CommonJS
- **Strict Type Checking**: All strict mode options enabled
- **Path Aliases**: `@/*` maps to `src/*` for cleaner imports
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated for type definitions
- **Includes**: Both `src/` and `tests/` directories

#### `tsconfig.build.json` (Production Build)

Extends `tsconfig.json` with production-specific settings:

- **Root Directory**: Set to `./src` only
- **Excludes**: Tests and non-production files
- **Includes**: Only `src/**/*` files

The path aliases (`@/*`) are resolved differently depending on the environment:
- **Development**: `tsconfig-paths/register` resolves aliases at runtime
- **Production Build**: `tsc-alias` resolves aliases in the compiled JavaScript output

### Environment Variables

This project uses **Zod** for type-safe environment variable validation and parsing.

#### Configuration

Environment variables are defined and validated in `src/lib/env.ts` using Zod schemas:

```typescript
const EnvSchema = z.object({
  NODE_ENV: z.enum(NODE_ENV_VALUES).optional(),
})
```

#### Supported Variables

- `NODE_ENV` - Environment mode (development, production, test)

#### Adding New Environment Variables

1. Update the Zod schema in `src/lib/env.ts`:

   ```typescript
   const EnvSchema = z.object({
     NODE_ENV: z.enum(NODE_ENV_VALUES).optional(),
     // Add your new variables here
     DATABASE_URL: z.string().url(),
     API_KEY: z.string().min(1),
   })
   ```

2. Create a `.env` file in the root directory for development:
   ```env
   NODE_ENV=development
   DATABASE_URL=postgresql://localhost:5432/mydb
   API_KEY=your-secret-key
   ```

#### Benefits

- **Runtime Validation** - Environment variables are validated at startup
- **Type Safety** - Full TypeScript support for environment variables
- **Clear Error Messages** - Helpful error messages for missing or invalid variables
- **Default Values** - Support for default values when variables are optional

## CI/CD

This template includes GitHub Actions workflows for continuous integration and deployment:

### Test Workflow

Runs on every push and pull request to `main` and `develop` branches:

- **Node.js 24** - Tests on the latest required version
- **Test Coverage** - Runs full test suite with coverage reporting
- **Coverage Upload** - Automatically uploads coverage reports to Codecov

### Build Workflow

Runs on every push and pull request to `main` and `develop` branches:

- **Matrix Building** - Builds on Node.js versions 22 and 24
- **Build Validation** - Ensures the project builds successfully and verifies artifacts
- **Artifact Storage** - Saves build artifacts for 7 days

### Code Quality Workflow

Ensures code quality standards:

- **Biome Linting** - Checks code style and potential issues
- **Formatting** - Validates code formatting
- **Auto-fix** - Automatically fixes formatting issues when possible

### Setting Up Codecov (Optional)

To enable coverage reporting:

1. Sign up at [codecov.io](https://codecov.io)
2. Add your repository
3. Add `CODECOV_TOKEN` to your GitHub repository secrets
4. Coverage reports will be automatically uploaded on each CI run

If you don't want to use Codecov, the workflow will continue without failing.

## Scripts Explained

- **`npm run dev`** - Uses `nodemon` and `ts-node` with `tsconfig-paths/register` to run TypeScript directly with hot reload and path alias support
- **`npm run build`** - Compiles TypeScript using `tsconfig.build.json` and resolves path aliases with `tsc-alias`
- **`npm start`** - Runs the compiled JavaScript from the `dist/` directory
- **`npm run clean`** - Removes build artifacts
- **`npm run prepare`** - Automatically sets up Husky git hooks (runs on `npm install`)

## Dependencies

### Runtime Dependencies

- **dotenv** - Load environment variables from `.env` files
- **pino** - Fast, low-overhead structured logging
- **zod** - TypeScript-first schema validation for environment variables

### Development Dependencies

- **typescript** - TypeScript compiler
- **@types/node** - Node.js type definitions
- **ts-node** - Run TypeScript directly without compilation
- **tsconfig-paths** - Load TypeScript path aliases at runtime
- **tsc-alias** - Resolve TypeScript path aliases in compiled output
- **nodemon** - Monitor for file changes and auto-restart
- **pino-pretty** - Pretty-print Pino logs in development
- **rimraf** - Cross-platform rm -rf command
- **@biomejs/biome** - Fast linter and formatter for JavaScript/TypeScript
- **husky** - Git hooks made easy
- **lint-staged** - Run linters on git staged files
- **@commitlint/cli** - Lint commit messages against conventional commit format
- **@commitlint/config-conventional** - Conventional commits configuration for commitlint

### Testing Dependencies

- **jest** - JavaScript testing framework
- **@types/jest** - TypeScript definitions for Jest
- **ts-jest** - Jest transformer for TypeScript

## Troubleshooting

### Jest Error When First Opening the Project

When you first open this project in your editor, you may see a Jest-related error before running `npm install`. This is expected behavior and occurs because Jest and its dependencies haven't been installed yet.

**Solution:** Simply run `npm install` to install all project dependencies. The error will disappear once the packages are installed.

## License

MIT
