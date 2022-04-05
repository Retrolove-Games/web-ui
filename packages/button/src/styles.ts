import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  border: "solid 2px $redDefault",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$primary",
  fontSize: "$desktopSmall",
  color: "$redDefault",
  lineHeight: "$lh13",

  cursor: "pointer",

  "&:hover, &:focus": {
    backgroundColor: "$redDefault",
    color: "$whiteDefault",
  },

  [`.${darkTheme} &`]: {
    borderColor: "$neonBlueDefault",
    color: "$neonBlueDefault",

    "&:hover, &:focus": {
      backgroundColor: "$neonBlueDefault",
      color: "$darkDefault",
    },
  },

  // Variants
  variants: {
    color: {
      red: {
        [`&, .${darkTheme} &`]: {
          borderColor: "$redDefault",
          color: "$redDefault",

          "&:hover, &:focus": {
            backgroundColor: "$redDefault",
          },
        },
      },

      neonBlue: {
        [`&, .${darkTheme} &`]: {
          borderColor: "$neonBlueDefault",
          color: "$neonBlueDefault",

          "&:hover, &:focus": {
            backgroundColor: "$neonBlueDefault",
          },
        },
      },
    },

    size: {
      medium: {
        height: "40px",
      },
    },
  },
});
