module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'],

  extends: 'airbnb',
  rules: {
    'react/jsx-no-bind': ['warn', {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: true,
      allowBind: false,
    }],
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'sort-keys': 'off',
    'max-len': 'off',
    'eol-last': 'off',
    'no-undef': 'off',
    'no-eval': 'error',
    indent: 'off',
    'import/first': 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': ['error', { submit: true, button: true }],
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',

    'jsx-a11y/label-has-for': 'off',

    'react/jsx-filename-extension': 'off',

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off', // this rule has a bug with the current version of typescript/es-lint. Possible solutions are downgrading

    'react-hooks/rules-of-hooks': 'error',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-syntax': ['error', 'WithStatement', 'LabeledStatement'],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
