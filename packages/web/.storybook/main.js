const customConfig = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-knobs/register'],
  webpackFinal: (config) => ({
    ...config,
    resolve: customConfig.resolve,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(ts|tsx)$/,
          use: [
            ...customConfig.module.rules[0].use,
            {
              loader: 'react-docgen-typescript-loader',
            },
          ],
        },
      ],
    },
    plugins: [...config.plugins, ...customConfig.plugins],
  }),
};
