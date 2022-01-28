import React, { useState } from "react";
import styled from "styled-components";

/**
 * Primary UI component for user boolean input
 *
 * Created by Aubin Spitzer according to Issue #11
 * https://github.com/aubincspitzer/wdc-storybook/issues/11
 *
 */

export interface ToggleProps {
  /** Function handling toggle interaction, promise so we can wait for completion */
  handleToggle?: (boolean) => Promise<void>;
  /** Current state of toggle; true = right = active */
  checked?: boolean;
  /** Whether the component is interactable or not */
  disabled?: boolean;
}

export const Toggle = ({ handleToggle, checked, disabled }: ToggleProps) => {
  const [isChecked, setChecked] = useState<boolean>(checked); //Controlled Checkbox state
  const [isLoading, setLoading] = useState<boolean>(false); //Whether we are waiting for an interaction to be handled

  async function handleChange() {
    if (isLoading) return; //don't allow interact if already loading

    await setLoading(true); //prevent interact and bg change
    await setChecked(!isChecked); //update state to move center
    try {
      if (handleToggle) await handleToggle(isChecked); //Handle the action meant to take place and wait for it to finish
    } catch (err) {
      console.log(err);
      setChecked(!isChecked); //If the action fails, revert to original state
    }

    setLoading(false); //Allow interact and base bg to match state
  }

  return (
    <Base disabled={disabled} showActiveBg={isLoading ? !isChecked : isChecked}>
      <Checkbox
        onChange={() => handleChange()}
        checked={isChecked}
        disabled={disabled}
      />
      <Center />
    </Base>
  );
};

/** TOGGLE SWITCH CENTER */
const Center = styled.div`
  //0.1 (margin) * 2 less than the height
  width: 1.4rem;
  height: 1.4rem;
  background: #f2f2f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10rem;
  margin: 0.1rem;

  /** Standard 300ms transition on all properties */
  transition: 0.3s;
`;


/** INVISIBLE CHECKBOX */
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;


/** BASE */
interface BaseProps {
  disabled?: boolean;
  /** Should the BG reflect the Center's state? */
  showActiveBg: boolean;
}
const Base = styled.label<BaseProps>`
  /**
   * This moves the switch center based on the checkbox value.
   * We can click on the Base to check the checkbox because it is the containing label.
  */
  ${Checkbox}:checked + ${Center} {
    margin-left: 1.1rem;
  }

  width: 2.6rem;
  height: 1.6rem;
  background: ${(props) => (props.showActiveBg ? "#30D158" : "#636366")};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  border-radius: 10rem;
  display: inline-block;
  padding: 0;
  transition: 0.3s;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
