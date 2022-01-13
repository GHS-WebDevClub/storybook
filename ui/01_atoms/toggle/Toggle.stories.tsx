import React from "react";

import { Toggle } from "./Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
