import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",

  "& .badge": {
    position: "relative",
    left: -10,
    top: 10
  }
});
