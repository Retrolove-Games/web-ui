import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("div", {
  display: "inline-flex",
  niceBorder2px: "$redDefault",

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
    top: 0,
    niceBorder2px: "$redDefault",
  },

  // Color theme
  [`.${darkTheme} &`]: {
    niceBorder2px: "$neonBlueDefault",
  },

  // Variants
  variants: {
    size: {
      small: {
        height: "32px",
        width: "80px",
        borderRadius: "16px",
        "& .switch-marker": {
          height: "32px",
          width: "32px",
          borderRadius: "16px",
          display: "block",
        }
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
