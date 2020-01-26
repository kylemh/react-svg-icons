module.exports = {
  stories: ['../src/index.stories.tsx'],
  addons: ['@storybook/addon-knobs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts');

    return config;
  },
};
