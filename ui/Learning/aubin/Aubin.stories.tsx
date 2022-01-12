import React from "react";

import { Aubin } from "./Aubin";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Aubin/ComponentOne",
  component: Aubin,
};

const Template = (args) => <Aubin {...args} />;

export const Primary = Template.bind({});
