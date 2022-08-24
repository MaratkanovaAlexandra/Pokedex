module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-inline-import'],
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          assets: './assets',
        },
      },
    ],
  ],
}
