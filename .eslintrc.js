module.exports = {
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { variables: false }],
    'react/prop-types': ['error', { ignore: ['navigation', 'navigation.navigate'] }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
