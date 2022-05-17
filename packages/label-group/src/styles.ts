import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
  backgroundColor: "transparent",
  border: "none",

  "& .left": {
    display: "flex",
  },

  "& .right": {
    display: "flex",
  },

  // Polymorphic styles
  "button&": {
    cursor: "pointer"
  },

  // Variants
  variants: {
    layout: {
      mobile: {
        "& .left": {
          paddingRight: "$xs",
        },
      },
      desktop: {
        "& .left": {
          paddingRight: "$sm",
        },
      },
    }
  }
});
