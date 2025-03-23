import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'simple-import-sort'],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto', // Accept both CR and LF based on OS
        },
      ],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [ // Custom order imports
            ['^react', '^@?\\w'],
            ['^@/'],
            ['^\\.'],
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  }),
];

export default eslintConfig;
