import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { RED_VARIANT, NEON_BLUE_VARIANT, PURPUREUS_VARIANT } from "./config";


export const Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",

  border: "solid 2px",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$body",
  fontSize: "$desktopSmall",
  lineHeight: "$lh13",

  cursor: "pointer",

  ...RED_VARIANT,

  [`.${darkTheme} &`]: {
    ...NEON_BLUE_VARIANT,
  },

  // Variants
  variants: {
    color: {
      red: {
        [`&, .${darkTheme} &`]: {
          ...RED_VARIANT,
        },
      },

      neonBlue: {
        [`&, .${darkTheme} &`]: {
          ...NEON_BLUE_VARIANT,
        },
      },

      purpureus: {
        [`&, .${darkTheme} &`]: {
          ...PURPUREUS_VARIANT,
        },
      },

      transparent: {
        [`&, .${darkTheme} &`]: {
          borderColor: "transparent",
        },
      },
    },

    size: {
      small: {
        height: "20px",
      },
      medium: {
        height: "40px",
      },
    },
  },
});
