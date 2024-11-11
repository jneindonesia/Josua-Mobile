module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['unused-imports'],
  rules: {
    'react/jsx-curly-spacing': [
      1,
      {
        when: 'always',
        children: true,
      },
    ],
    'react-native/no-inline-styles': 0,
    'object-curly-spacing': [1, 'always'],
    'jsx-quotes': [1, 'prefer-single'],
    quotes: [1, 'single'],
    eqeqeq: 1,
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-unneeded-ternary': 1,
    'no-extra-bind': 2,
    'no-console': 1,
    'no-trailing-spaces': [1, {skipBlankLines: true}],
    'comma-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    semi: 2,
    'semi-spacing': 1,
    'keyword-spacing': 1,
    'array-bracket-spacing': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'block-spacing': 1,
    'func-call-spacing': 1,
    'brace-style': [1, '1tbs', {allowSingleLine: true}],
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false,
        overrides: {
          '+': true,
        },
      },
    ],
    'spaced-comment': 1,
    'rest-spread-spacing': 2,
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 0,
    'unused-imports/no-unused-imports': 2,
    'react-hooks/rules-of-hooks': 1,
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'max-len': 0,
    // 'radix': [1, 'as-needed']
  },
};