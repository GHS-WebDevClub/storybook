import React, { useEffect, useState } from "react";

/**
 * Primary UI component for user boolean input
 *
 * Created by Aubin Spitzer according to Issue #11
 * https://github.com/aubincspitzer/wdc-storybook/issues/11
 *
 */

export interface ToggleProps {
  /** Function handling toggle interaction */
  handleToggle: (boolean) => void;
  /** Current state of toggle; true = right */
  isToggled?: boolean;
  /** Set the size of the component */
  size?: "small" | "large" | "default";
}

export const Toggle = ({
  handleToggle,
  isToggled,
  size = "default",
}: ToggleProps) => {
  const [isLoading, setLoading] = useState(false);

  const sizes = {
    default: {
      w: "20",
      h: "12",
      translation: "8",
      margin: "1",
    },
    large: {
      w: 0,
      h: 0,
      translation: 0,
      margin: 0,
    },
    small: {
      w: 0,
      h: 0,
      translation: 0,
      margin: 0,
    },
  };

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
      className={`h-${sizes[size].h} w-${sizes[size].w} rounded-full bg-slate-800 flex items-center`}
    >
      <div
        className={`h-${sizes[size].h} w-${sizes[size].h} rounded-full mx-${
          sizes[size].margin
        } ${
          isToggled
            ? `bg-green-400 translate-x-${sizes[size].translation}`
            : "bg-red-400"
        }`}
      ></div>
    </div>
  );
};
