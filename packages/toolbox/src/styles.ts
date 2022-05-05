import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {

  // Variants
  variants: {
    spacing: {
      md: {
        '& > * ~ *': {
          marginLeft: "$md",
        },
      },
      lg: {
        '& > * ~ *': {
          marginLeft: "$lg",
        },
      },
      xl: {
        '& > * ~ *': {
          marginLeft: "$xl",
        },
      },
    }
  },
});
