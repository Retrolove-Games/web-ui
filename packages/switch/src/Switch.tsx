import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("div", {
  display: "inline-flex",

  // border: "solid 1px $redDefault",
  // boxShadow: "0 0 2px 0 $redBorder",
  niceBorder: "$redDefault",

  "& input": {
    visibility: "hidden",
    height: 0,
    width: 0,
  },

  "& label": {
    position: "relative"
  },

  "& .switch-marker": {
    position: "absolute",
    left: 0,
    border: "solid 1px $redBorder",
  },

  // Color theme
  [`.${darkTheme} &`]: {
    // border: "solid 1px $neonBlueDefault",
    // boxShadow: "0 0 2px 0 $neonBlueBorder",
    niceBorder: "$neonBlueDefault",
  },

  // Variants
  variants: {
    size: {
      small: {
        height: "32px",
        width: "80px",
        borderRadius: "16px",
      },
      medium: {
        height: "48px",
        borderRadius: "24px",
      },
    },
  },
});

type ComponentProps = {
  id: string;
  isOn?: boolean;
  handleToggle: (event?: React.FormEvent<HTMLInputElement>) => void;
};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const Switch: ComponentType = ({
  id,
  size = "small",
  isOn = false,
  handleToggle,
  ...props
}) => (
  <Wrapper size={size} {...props}>
    <input id={id} type="checkbox" checked={isOn} onChange={handleToggle} />
    <label htmlFor={id}>
      <span className="switch-marker" />
    </label>
  </Wrapper>
);
