// .storybook/main.js

const path = require("path");

module.exports = {
  stories: ["../ui/**/*.stories.mdx", "../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  /** Expose public folder to storybook as static */
  staticDirs: ["../ui/assets"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
};
