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
    isToggled?: boolean;
}

export const Toggle = ({ handleToggle, isToggled }: ToggleProps) => {
    const [isLoading, setLoading] = useState(false);

    async function handleClick() {
        setLoading(true);
        handleToggle(!isToggled);
    }

    useEffect(() => {
        setLoading(isToggled);
    }, [isToggled])

  return (
    <div onClick={() => { handleClick() }} className={[ "toggle-base",  ].join(" ")}>
      <div className={[ "toggle-center", isLoading ? "toggle-center--loading" : "" ].join(" ")}>
        
      </div>
    </div>
  );
};