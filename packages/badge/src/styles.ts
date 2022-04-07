import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "$whiteDefault",
  rightTopShadow: "rgba(0, 0, 0, 0.25)",

  fontFamily: "$primary",
  color: "$darkDefault",
  lineHeight: "$lh",
  fontWeight: "$primaryBold",

  // Variants
  variants: {
    color: {
      red: {
        backgroundColor: "$redDefault",
        color: "$whiteDefault",
      },

      neonBlue: {
        backgroundColor: "$neonBlueDefault",
        color: "$whiteDefault",
      },
    },
    size: {
      small: {
        height: "22px",
        width: "22px",
        borderRadius: "11px",
        fontSize: "$desktopXSmall",
      },
    },
  },
});
