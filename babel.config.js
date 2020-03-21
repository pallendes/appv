module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
