import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
  backgroundColor: "transparent",
  border: "none",

  "& .left": {
    marginRight: 15
  },

  // Polymorphic styles
  "button&": {
    cursor: "pointer"
  }
});
