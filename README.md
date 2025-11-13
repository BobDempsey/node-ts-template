# Node.js TypeScript Template

A simple and clean Node.js project template with TypeScript support.

## Features

- 🚀 **TypeScript** - Full TypeScript support with strict type checking
- 🔄 **Hot Reload** - Automatic restart on file changes during development
- 📦 **Modern Node.js** - Targets ES2020 and Node.js 18+
- 🛠️ **Development Ready** - Pre-configured build and development scripts

## Project Structure

```
node-ts-template/
├── src/
│   └── index.ts          # Main entry point
├── dist/                 # Compiled JavaScript output (auto-generated)
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

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

This will start the server on `http://localhost:3000` and automatically restart when you make changes to the code.

### Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

This creates optimized JavaScript files in the `dist/` directory.

### Production

Run the compiled JavaScript in production:

```bash
npm start
```

### Other Commands

- `npm run clean` - Remove the `dist/` directory

## Configuration

### TypeScript Configuration

The `tsconfig.json` is configured with:

- Target: ES2020
- Module: CommonJS
- Strict type checking enabled
- Source maps for debugging
- Declaration files generation

### Environment Variables

You can use environment variables in your application:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode

Create a `.env` file in the root directory to set environment variables for development.

## Scripts Explained

- **`npm run dev`** - Uses `nodemon` and `ts-node` to run TypeScript directly with hot reload
- **`npm run build`** - Compiles TypeScript using the TypeScript compiler (`tsc`)
- **`npm start`** - Runs the compiled JavaScript from the `dist/` directory
- **`npm run clean`** - Removes build artifacts

## Development Dependencies

- **typescript** - TypeScript compiler
- **@types/node** - Node.js type definitions
- **ts-node** - Run TypeScript directly without compilation
- **nodemon** - Monitor for file changes and auto-restart
- **rimraf** - Cross-platform rm -rf command

## License

MIT
