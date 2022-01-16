import React, { useEffect, useState } from "react";
import styled from "styled-components";

/**
 * Primary UI component for user boolean input
 *
 * Created by Aubin Spitzer according to Issue #11
 * https://github.com/aubincspitzer/wdc-storybook/issues/11
 *
 */

export interface ToggleProps {
  /** Function handling toggle interaction */
  handleToggle: () => void;
  /** Current state of toggle; true = right */
  checked?: boolean;
  /** Set the size of the component */
  size?: "small" | "large" | "default";
}

export const Toggle = ({
  handleToggle,
  checked,
  size = "default",
}: ToggleProps) => {
  return (
    <Base>
      <Checkbox />
      <Center
        onClick={() => {
          handleToggle();
        }}
      />
    </Base>
  );
};

const Center = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: #f2f2f7;
  border-radius: 10rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  cursor: pointer;
`;

const Base = styled.span`
  ${Checkbox}:checked + ${Center} {
    margin-left: auto;
  }

  width: 5rem;
  height: 3rem;
  background: #636366;
  border-radius: 10rem;

  display: flex;
  align-items: center;
`;
