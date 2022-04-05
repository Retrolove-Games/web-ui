import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { SIZE_VARIANTS } from "./config";

export const Wrapper = styled("span", {
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
      ...SIZE_VARIANTS,
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
