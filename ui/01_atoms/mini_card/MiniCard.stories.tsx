import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react"

import { MiniCard, MiniCardProps } from "./MiniCard";

export default {
    title: "Atoms/MiniCard",
    component: MiniCard,
} as ComponentMeta<typeof MiniCard>;

const Template: ComponentStory<typeof MiniCard> = (args: MiniCardProps) => <MiniCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Title",
    subtitle: "subtitle",
    secSubtitle: "S.S.",
    Icon: "verified",
    iconColor: "red"
}

export const VerifiedCourse = Template.bind({});
VerifiedCourse.args = {
    title: "Jazz Ensemble I",
    subtitle: "Sessink",
    Icon: "verified"
}

export const MultipartAssignment = Template.bind({});
MultipartAssignment.args = {
    title: "Great Gatsby Essay",
    subtitle: "Language Arts",
    secSubtitle: "3/7",
    Icon: "warn"
}