import { IconButton, IconButtonProps } from "./IconButton";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/IconButton",
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: IconButtonProps) => <IconButton {...args} />;

export const Success = Template.bind({})
Success.args = {
    primary: true,
    status: "success"
}

export const Fail = Template.bind({});
Fail.args = {
    primary: true,
    status: "fail"
}

export const Loading = Template.bind({});
Loading.args = {
    primary: true,
    status: "loading"
}

export const Ready = Template.bind({});
Ready.args = {
    primary: true,
    status: "ready"
}

