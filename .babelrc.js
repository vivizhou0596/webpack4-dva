module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          components: './src/components',
        },
      },
    ],
    "dva-hmr",
  ],
  // env: {
  //   production: {
  //     plugins: ['transform-remove-console'],
  //   },
  //   development:{
  //     plugins: ["dva-hmr","transform-runtime"]
  //   }
  // },
};
