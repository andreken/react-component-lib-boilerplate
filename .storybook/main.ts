import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/__docs__/*.stories.tsx', '../src/**/__docs__/*.mdx'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Added SVG plugin to handle icons as components
    config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        svgrOptions: {
          icon: true,
          exportType: 'default',
        },
        include: '**/*.svg',
      })
    );

    return config;
  },
};
export default config;
