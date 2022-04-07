import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Atoms/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => <Toggle {...args} />;

export const Active = Template.bind({});
Active.args = {
  checked: true,
  disabled: false,
};

export const Inactive = Template.bind({});
Inactive.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};

export const AsyncExample = Template.bind({});
AsyncExample.args = {
  checked: false,
  disabled: false,
  /** Used to demonstrate behavior when a function maybe take a second to complete */
  handleToggle: () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  },
};
