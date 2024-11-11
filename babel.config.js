module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          app: './app',
          svgs: './assets/svgs',
          '@styles': './app/styles/index',
          '@design-system': './app/design-system',
          '@helper': './app/utils',
          '@icons': './assets/icons',
          '@images': './assets/images',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
