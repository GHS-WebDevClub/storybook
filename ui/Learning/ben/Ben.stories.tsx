import React from "react";

import { Ben } from "./Ben";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ben/ComponentOne",
  component: Ben,
};

const Template = (args) => <Ben {...args} />;

export const Primary = Template.bind({});
