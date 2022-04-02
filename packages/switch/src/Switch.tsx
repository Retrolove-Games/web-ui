import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("div", {
  display: "inline-block",
  position: "relative",

  niceBorder1px: "$redDefault",

  "& input": {
    appearance: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    margin: 0,
    zIndex: 1,
    cursor: "pointer",
  },

  "& .switch": {
    display: "block",
    transition: "all .5s ease-out",
  },

  "& .switch-marker": {
    niceBorder1px: "$redDefault",
    display: "block",
    transform: "translate3d(0, 0, 0)",
    transition: "all .25s ease-in-out",
  },

  "& .icon": {
    position: "absolute",
    textAlign: "center",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "& .icon:nth-of-type(1)": {
    right: 0,
  },

  // Color theme
  [`.${darkTheme} &`]: {
    niceBorder1px: "$neonBlueDefault",
    "& .switch-marker": {
      niceBorder1px: "$neonBlueDefault",
    },
  },

  // Variants
  variants: {
    size: {
      small: {
        borderRadius: "16px",

        "& .switch": {
          height: "32px",
          width: "80px",
        },

        "& .switch-marker": {
          height: "32px",
          width: "32px",
          borderRadius: "16px",
        },

        "& input:checked + .switch .switch-marker": {
          transform: "translate3d(calc(80px - 32px), 0, 0)",
        },

        "& .icon": {
          height: "32px",
          width: "32px",
        },
      },
    },
  },
});

type ComponentProps = {
  id: string;
  isOn: boolean;
  handleToggle: (event?: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const Switch: ComponentType = ({
  id,
  isOn,
  handleToggle,
  size = "small",
  label,
  leftIcon,
  rightIcon,
  ...props
}) => (
  <Wrapper size={size} {...props}>
    <input
      id={id}
      type="checkbox"
      aria-label={label}
      checked={isOn}
      onChange={handleToggle}
    />
    <div className="switch" aria-hidden="true" role="presentation">
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="switch-marker" />
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </div>
  </Wrapper>
);
