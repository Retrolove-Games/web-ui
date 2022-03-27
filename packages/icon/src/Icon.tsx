import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";
import { SIZE_VARIANTS } from "./config";

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
      ...SIZE_VARIANTS
    },
    color: {
      red: {
        "& .primary-fill": {
          fill: "$redDefault !important",
        },
      },
      neonBlue: {
        "& .primary-fill": {
          fill: "$neonBlueDefault !important",
        },
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
