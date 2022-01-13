import React, { useState } from "react";

import { Toggle } from "./Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Active = Template.bind({});
Active.args = {
    isToggled: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
    isToggled: false,
}
