import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: any) => (
  <TextInput {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  placeholder: "Username",
};

export const Filled = Template.bind({});
Filled.args = {
  value: "johndoe",
};
