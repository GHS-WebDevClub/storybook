module.exports = {
  stories: [
    "../ui/**/*.stories.mdx",
    "../ui/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: (config, {configType}) => {
    const path  = require('path');

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader?modules=true'],
      include: path.resolve(__dirname, '../'),
    });
    
    return config;
  }
};
