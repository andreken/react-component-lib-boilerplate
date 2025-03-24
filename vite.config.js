import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { dirname, extname, relative, resolve } from 'path';
import path from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    // Adds support for React's JSX/TSX syntax
    react(),
    // Converts SVG files into React components
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'default',
      },
      include: '**/*.svg',
    }),
    // Generates TypeScript declaration files (.d.ts)
    dts({
      // Include every files that are in src directory and inside each folder contained in components,
      // while excluding nested functions/hooks or components (eg. AlertBanner)
      include: ['src/*', 'src/components/*/*'],
    }),
    // Injects CSS into JavaScript instead of creating separate files
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      /**
       * Provide a dummy entry that points to your index file, to avoid plugin errors
       * Not really needed because I'm manually mapping entry files inside "rollupOptions"
       */
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-component-lib-boilerplate',
      // Exporting only es module because this library is made to be used on modern FE applications
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      /**
       * Manually telling rollup which files to process, to generate a single js file for each component
       * When using the library I want to import only js files related to the imported components to reduce app bundle size,
       * while avoiding having multiple js files for a single component (eg. AlertBanner)
       */
      input: Object.fromEntries(
        glob
          // Estract main index file and all tsx/ts files that are exactly one level deep inside each component folder
          .sync(['src/index.ts', 'src/components/*/*.{ts,tsx}'], {
            ignore: ['src/**/*.d.ts', 'src/**/__docs__/*'],
          })
          .map(file => [
            // Relative path of the entry file from src without extension
            // eg. src/nested/foo.ts becomes nested/foo
            relative('src', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // eg. src/nested/foo.ts becomes /your-absolute-path/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        // Don't preserve modules - I want to bundle only top-level component and not nested ones
        preserveModules: false,
        entryFileNames: '[name].js',
      },
    },
  },
  css: {
    // Enable css modules using camelCase instead of kebab-case for classes
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // Tells Vite which file extensions to resolve automatically when importing modules
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
