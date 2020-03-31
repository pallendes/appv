module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@app-context': './src/app-context',
        },
      },
    },
  },
};
