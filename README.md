# Boilerplate Project

This is a simple, reusable boilerplate for HTML, SCSS, and TypeScript projects. It includes configurations for compiling SCSS to CSS and TypeScript to JavaScript, along with best practices for modern browsers.

## Features

- HTML5 structure with social media Open Graph meta tags.
- SCSS with auto-compilation to CSS.
- TypeScript with auto-compilation to JavaScript.
- Webpack bundling.
- Live compilation on save.
- Pre-configured VS Code workspace and tasks.
- Robots.txt for search engine optimization.
- Browser configuration files for modern browser compatibility.
- DaisyUI

## Installation

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start watching for SCSS and TypeScript changes:

   ```sh
   npm run watch
   ```

   This will start the SCSS watcher **first**, then the TypeScript watcher in sequence.

3. Run a build for production:
   ```sh
   npm run build
   ```

## Commands

- `npm run build` - Compiles SCSS and TypeScript.
- `npm run watch` - Watches for changes and recompiles both SCSS and TypeScript **sequentially**.

## Recommended VS Code Extensions

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier** (`esbenp.prettier-vscode`)
- **TypeScript Next** (`ms-vscode.vscode-typescript-next`)

## License

MIT License.
