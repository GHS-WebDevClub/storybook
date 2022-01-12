import React from "react";

import { Title } from "./Title";

export default {
  title: "WDC/Title",
  component: Title
};

const Template = (args) => <Title {...args} />;

export const Test = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test.args = {
  content: "Example Title"
};
