import React, { useEffect, useState } from "react";
import "./Toggle.css";

/**
 * Primary UI component for user boolean input
 * 
 * Created by Aubin Spitzer according to Issue #11
 * https://github.com/aubincspitzer/wdc-storybook/issues/11
 * 
 */

interface ToggleProps {
    handleToggle: (boolean) => void;
    state?: boolean;
}

export const Toggle = ({ handleToggle, state }: ToggleProps) => {
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        setLoading(true);
        handleToggle(!state);
    }

    useEffect

  return (
    <div onClick={() => { handleToggle() }} className={[ "toggle-base",  ].join(" ")}>
      <div className={[ "toggle-center" ].join(" ")}>

      </div>
    </div>
  );
};