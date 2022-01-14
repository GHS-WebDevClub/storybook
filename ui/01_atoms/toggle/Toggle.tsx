import React, { useEffect, useState } from "react";

/**
 * Primary UI component for user boolean input
 *
 * Created by Aubin Spitzer according to Issue #11
 * https://github.com/aubincspitzer/wdc-storybook/issues/11
 *
 */

interface ToggleProps {
  /** Function handling toggle interaction */
  handleToggle: (boolean) => void;
  /** Current state of toggle; true = right */
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
  }, [isToggled]);

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="bg"
    >
      <div
        className={[
          "toggle-center",
          isLoading ? "toggle-center--loading" : "",
        ].join(" ")}
      ></div>
    </div>
  );
};
