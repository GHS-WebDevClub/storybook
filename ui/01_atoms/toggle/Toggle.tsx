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

const Center = styled.span`
  // width: 2.5rem;
  // height: 2.5rem;
  background: #e2e2e2;
  border-radius: 34px;

  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;

  {Center}:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;

const Base = styled.label`
  ${Checkbox}:checked + ${Center} {
    background-color: #2196F3;
  }

  ${Checkbox}:focus + ${Center} {
    box-shadow: 0 0 1px #2196F3;
  }

  ${Checkbox}:checked + ${Center}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
