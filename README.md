# React Library Storybook Starter

A modern boilerplate for building React component libraries with TypeScript, Vite, and Storybook.

## Features

- ⚡️ **Vite** - Fast build tooling optimized for library development
- 🧩 **Component-based architecture** - Clean organization for your UI components
- 📚 **Storybook integration** - Visual testing and documentation
- 🔍 **TypeScript** - Type safety and improved developer experience
- 📦 **Optimized builds** - Tree-shakable output with per-component JS files
- 💅 **CSS Modules** - Scoped styling with SCSS support
- 🧪 **Modern React** - Support for React 19+ features
- 🚀 **Developer experience** - ESLint, Prettier, and TypeScript configured

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm 10 or later

### Installation

1. Clone this repository:
```bash
git clone https://github.com/andreken/react-component-lib-boilerplate.git my-component-lib
cd my-component-lib
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook to preview components:
```bash
npm run storybook
```

## Project Structure

```
/
├── src/                            # Source code
│   ├── assets/                     # SVG icons
│   ├── components/                 # UI components
│   │   ├── Button/                 # Component folder
│   │   │   ├── Button.tsx          # Main component file
│   │   │   ├── styles.module.scss  # Component styles
│   │   │   ├── __docs__/           # Storybook stories and docs
│   │   │   └── components/         # Private sub-components (if needed)
│   │   └── ...                     # Other components
│   └── index.ts                    # Main entry point (FAKE) for exports
├── .storybook/                     # Storybook configuration
├── dist/                           # Build output
├── vite.config.js                  # Vite configuration
└── tsconfig.json                   # TypeScript configuration
```

## Development

### Creating a New Component

1. Create a new folder in `src/components/` with your component name
2. Add the main component file (e.g., `ComponentName.tsx`)
3. Create styles using `styles.module.scss`
4. Create Storybook stories in `__docs__/`
5. Export the component in `src/index.ts`
   ```ts
   export { default as ComponentName } from './components/ComponentName/ComponentName';
   ```

### Component Template

```tsx
// src/components/Example/Example.tsx
import styles from './Example.module.scss';

export interface ExampleProps {
  label: string;
  onClick?: () => void;
}

export const Example: React.FC<ExampleProps> = ({ label, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {label}
    </div>
  );
};

export default Example;
```

### Storybook Story Template

```tsx
// src/components/Example/__docs__/Example.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from '../Example';

const meta: Meta<typeof Example> = {
  title: 'Components/Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    label: 'Example Component',
  },
};
```

## Building

Build the library with:

```bash
npm run build
```

This generates:
- Main JS file exporting all components in `dist/` directory
- Individual JS files for each component in the `dist/components` directory
- TypeScript declaration files (`.d.ts`) for proper type support
- CSS injected directly into the JavaScript for zero-config styling

## Library Architecture Highlights

### Optimized Bundle Strategy

This library uses a smart bundling strategy that:

1. Creates a separate JS file for each top-level component
2. Bundles any nested components into their parent component's file
3. Generates proper TypeScript declarations for all components
4. Injects CSS directly into JS for simplified usage

This approach allows consumers of your library to only load the components they need, significantly reducing bundle size in the final application.

### Vite Configuration

The Vite configuration is optimized for component library development:

- Uses `preserveModules: false` to bundle each top-level component
- Extracts TypeScript declarations automatically
- Converts SVGs to React components
- Injects CSS directly into JS files
- Supports SCSS modules with camelCase class names

## Usage in Projects

### Installation

```bash
npm install your-library-name
```

### Importing Components

```jsx
import { Button } from 'your-library-name';

function App() {
  return (
    <Button
      text="Click Me"
      variant="primary"
      onClick={() => alert('Button clicked!')}
    />
  );
}
```

## Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for static deployment
- `npm run build` - Build the component library
- `npm run clean` - Clean the build directory
- `npm run lint` - Run ESLint checks
