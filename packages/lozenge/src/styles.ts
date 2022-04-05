import { styled } from "@retrolove-games/ui-themes";

export const Wrapper = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  border: "solid 2px $neonBlueDefault",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$primary",
  fontSize: "$desktopSmall",
  color: "$neonBlueDefault",
  lineHeight: "$lh13",
  textTransform: "uppercase",
  fontWeight: "$primaryBold",

  // Variants
  variants: {
    color: {
      red: {
        borderColor: "$redDefault",
        color: "$redDefault",
      },

      neonBlue: {
        borderColor: "$neonBlueDefault",
        color: "$neonBlueDefault",
      },
    },
    size: {
      medium: {
        height: "40px",
      },
    },
  },
});
