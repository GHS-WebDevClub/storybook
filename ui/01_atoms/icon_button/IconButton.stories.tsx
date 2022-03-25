import { IconButton, IconButtonProps } from "./IconButton";

export default {
    title: "Atoms/IconButton",
    component: IconButton,
};

const Template = (args: IconButtonProps) => <IconButton {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

export const Secondary = Template.bind({})

export const Fails = Template.bind({});
Fails.args = {
    primary: true,
    action: () => new Promise((res, rej) => {
        setTimeout(() => { res(false) }, 2000)
    })
}

export const Succeeds = Template.bind({});
Succeeds.args = {
    primary: true,
    action: () => new Promise((res, rej) => {
        setTimeout(() => { res(true) }, 2000)
    })
}

export const Disabled = Template.bind({});
Disabled.args = {
    primary: true,
    disabled: true
}

