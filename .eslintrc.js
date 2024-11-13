module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react-hooks/recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'react',
    'unused-imports',
    'no-relative-import-paths',
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src' },
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'error',

    'react/jsx-curly-brace-presence': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'jsx-quotes': ['error'],

    'no-nested-ternary': ['error'],

    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],

    'import/no-cycle': ['error'],

    'react-hooks/exhaustive-deps': ['warn'],
  },
  ignorePatterns: ['*.d.ts'],
  overrides: [
    {
      files: ['*.tsx?'],
      excludedFiles: ['*.d.ts'],

      rules: {
        '@typescript-eslint/no-unnecessary-condition': ['error'],
      },

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
