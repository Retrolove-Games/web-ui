import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("div", {
  display: "inline-block",
  position: "relative",

  niceBorder1px: "$redDefault",

  "& input": {
    visibility: "hidden",
    height: 0,
    width: 0,
  },

  "& label": {
    display: "block",
    transition: "all .5s ease-out",
    cursor: "pointer",
  },

  "& .switch-marker": {
    niceBorder1px: "$redDefault",
    display: "block",
    transform: "translate3d(0, 0, 0)",
    transition: "all .25s ease-in-out",
  },

  // Color theme
  [`.${darkTheme} &`]: {
    niceBorder1px: "$neonBlueDefault",
  },

  // Variants
  variants: {
    size: {
      small: {
        borderRadius: "16px",

        "& label": {
          height: "32px",
          width: "80px",
        },

        "& .switch-marker": {
          height: "32px",
          width: "32px",
          borderRadius: "16px",
        },

        "& input:checked + label .switch-marker": {
          transform: "translate3d(calc(80px - 32px), 0, 0)",
        }
      }
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
