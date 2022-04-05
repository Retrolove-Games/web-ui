import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("span", {
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
