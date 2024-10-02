const path = require('path');

module.exports = function override(config, env) {
  // Находим правило для sass-loader
  const sassRule = config.module.rules.find(rule => rule.test && rule.test.toString().includes('scss|sass'));

  if (sassRule) {
    // Обновляем конфигурацию sass-loader
    sassRule.use = sassRule.use.map(loader => {
      if (loader.loader && loader.loader.includes('sass-loader')) {
        return {
          ...loader,
          options: {
            ...loader.options,
            implementation: require('sass'),
            sassOptions: {
              fiber: false,
              silenceDeprecations: ['legacy-js-api'], // Добавляем эту опцию
            },
            sourceMap: true,
          },
        };
      }
      return loader;
    });

    // Удаляем resolve-url-loader из цепочки лоадеров
    sassRule.use = sassRule.use.filter(loader => !(loader.loader && loader.loader.includes('resolve-url-loader')));

    // Добавляем postcss-loader с настройками для решения проблемы с postcss.plugin
    sassRule.use.splice(sassRule.use.length - 1, 0, {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          plugins: [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
          ],
        },
        sourceMap: true,
      },
    });
  }

  // Обновляем конфигурацию webpack-dev-server
  if (config.devServer) {
    config.devServer = {
      ...config.devServer,
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
        return middlewares;
      },
    };
  }

  return config;
};
