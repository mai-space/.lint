import js from '@eslint/js';
import ts from 'typescript-eslint';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,
  {
    ignores: ['node_modules', 'vendor', 'dist', 'public', 'build', 'out'],
  },
  ...ts.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      tailwind,
    },
  },
  {
    files: ['node_packages/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        alert: 'readonly',
        // ...add more browser globals as needed
      },
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
];
