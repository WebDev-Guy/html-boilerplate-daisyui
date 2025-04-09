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
- Centralized asset management: 
  - `src/assets/` for SCSS-referenced assets.
  - `src/static/` for HTML-referenced assets.

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

3. **Alternative:** Start watchers separately:

   ```sh
   npm run watch:ts
   npm run watch:scss
   ```

4. Run a build for production:
   ```sh
   npm run build
   ```

## Commands

- `npm run build` - Compiles SCSS and TypeScript.
- `npm run watch` - Watches for changes and recompiles both SCSS and TypeScript **sequentially**.
- `npm run watch:ts` - Watches TypeScript files and recompiles.
- `npm run watch:scss` - Watches SCSS files and recompiles.

## Recommended VS Code Extensions

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier** (`esbenp.prettier-vscode`)
- **TypeScript Next** (`ms-vscode.vscode-typescript-next`)

## Updating the Template for a New Project

When using this template for a new project, update the following:

1. **index.html**:
   - Replace the `<title>` tag with the new project title.
   - Update Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`) with project-specific values.
   - Replace the `meta[name='twitter:card']` content if needed.

2. **Assets**:
   - Replace `assets/large-logo-dark.jpg`, `assets/apple-touch-icon.png`, and other favicon/logo files with project-specific assets.

3. **SCSS and TypeScript**:
   - Modify `src/styles.scss` and `src/script.ts` to include project-specific styles and scripts.

4. **README.md**:
   - Update this file to reflect the new project's details.

## Updating the Theme

To update the theme for your project:

1. **HTML**:
   - Ensure the `custom-theme` attribute in the `<body>` tag is set to the desired theme name.

2. **Tailwind Configuration**:
   - Update the `tailwind.config.js` file to include your custom theme under the `daisyui.themes` array.
   - Use the `custom-theme` key to define your theme colors and settings.

3. **Assets**:
   - Replace placeholder images (e.g., `assets/placeholder.jpg`) with project-specific assets.

## License

MIT License.
