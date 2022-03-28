import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("div", {
  display: "inline-flex",
  border: "solid 1px $redDefault",

  // Color theme
  [`.${darkTheme} &`]: {
    border: "solid 1px $neonBlueDefault",
  },

  // Variants
  variants: {
    size: {
      small: {
        height: "32px",
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
      <span />
    </label>
  </Wrapper>
);
