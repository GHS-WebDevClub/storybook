import React, { useState } from "react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
