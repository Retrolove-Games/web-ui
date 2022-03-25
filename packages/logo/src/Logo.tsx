import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("span", {
  display: "inline-block",

  "& svg": {
    height: "100%",
    width: "auto",
  },

  // SVG colors
  "& .letter": {
    fill: "$darkDefault",
    transition: "fill .25s ease-out",
  },

  [`.${darkTheme} &`]: {
    "& .letter": {
      fill: "$whiteDefault",
    },
  },

  // Variants
  variants: {
    size: {
      small: {
        height: "40px",
      },
      medium: {
        height: "60px",
      },
    },
  },
});

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants>;

export const Logo: ComponentType = ({ children, size = "small", ...props }) => (
  <Wrapper aria-label="Retrolove Shop" role="img" size={size} {...props}>
    {children}
  </Wrapper>
);
