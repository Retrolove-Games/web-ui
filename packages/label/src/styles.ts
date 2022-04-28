import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("label", {
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "pointer",

  color: "$redDefault",
  fontFamily: "$body",
  textTransform: "uppercase",
  fontSize: "$desktopXs",
  lineHeight: "$lh13",

  [`.${darkTheme} &`]: {
    color: "$neonBlueDefault",
  },
});
