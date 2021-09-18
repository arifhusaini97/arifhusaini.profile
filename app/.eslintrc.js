module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/prettier',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue', 'js'],
        shouldMatchCase: true,
      },
    ],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-dupe-keys': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/prop-name-casing': ['error', 'snake_case'],
    'vue/require-name-property': 'error',
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/max-len': [
      'error',
      {
        code: 80,
        template: 80,
        tabWidth: 2,
        comments: 80,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
      },
    ],
    'vue/new-line-between-multi-line-property': 'warn',
    'vue/padding-line-between-blocks': 'warn',
    'vue/static-class-names-order': 'warn',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
