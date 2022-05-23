import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { RED_VARIANT, NEON_BLUE_VARIANT, PURPUREUS_VARIANT } from "./config";

export const LeftElementWrapper = styled("div", {
  paddingRight: "$sm",
});

export const RightElementWrapper = styled("div", {
  paddingLeft: "$sm",
});

export const Wrapper = styled("button", {
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",

  border: "solid 1px",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$body",
  fontSize: "$desktopSm",
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

    width: {
      normal: {
        display: "inline-flex",
      },
      full: {
        display: "flex",
        width: "100%",
      }
    },
  },
});
