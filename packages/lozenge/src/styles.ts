import { styled, buttonVariants } from "@retrolove-games/ui-themes";

export const Wrapper = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  border: "solid 2px $neonBlueDefault",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$body",
  fontSize: "$desktopSm",
  color: "$neonBlueDefault",
  lineHeight: "$lh13",
  textTransform: "uppercase",
  fontWeight: "$bodyBold",

  // Variants
  variants: {
    color: {
      ...buttonVariants
    },
    size: {
      medium: {
        height: "40px",
      },
    },
  },
});
