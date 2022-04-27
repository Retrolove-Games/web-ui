import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
  position: "relative",

  paddingRight: 15,

  "& .badge": {
    position: "absolute",
    left: 15,
    top: 15
  }
});
