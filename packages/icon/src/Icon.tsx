import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("span", {
  display: "inline-block",

  "& svg": {
    height: "100%",
    width: "auto",
  },

  // SVG default colors
  "& .primary-fill": {
    fill: "$redDefault",
    transition: "fill .25s ease-out",
  },

  [`.${darkTheme} &`]: {
    "& .primary-fill": {
      fill: "$neonBlueDefault",
    },
  },

  // Variants
  variants: {
    size: {
      small: {
        height: "24px",
      },
      medium: {
        height: "60px",
      },
    },
  },
});

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants>;

export const Icon: ComponentType = ({ children, size = "small", ...props }) => (
  <Wrapper role="presentation" aria-hidden="true" size={size} {...props}>
    {children}
  </Wrapper>
);
