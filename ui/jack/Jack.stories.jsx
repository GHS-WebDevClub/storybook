import React from "react";

import { Jack } from "./Jack";

export default {
  title: "Jack/ComponentOne",
  component: Jack
};

const Template = (args) => <Jack {...args} />;

export const Primary = Template.bind({});