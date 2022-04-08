import { darkTheme } from "@retrolove-games/ui-themes";

export const RED_VARIANT = {
  borderColor: "$redDefault",
  color: "$redDefault",

  // Hovers
  "&:hover, &:focus": {
    backgroundColor: "$redDefault",
    color: "$btnHoverText",
  },

  // Disabled state
  "&[disabled], &[disabled]:hover, &[disabled]:focus": {
    borderColor: "$red800",
    color: "$red800",
    cursor: "not-allowed",
    backgroundColor: "transparent",
  },
};

export const NEON_BLUE_VARIANT = {
  borderColor: "$neonBlueDefault",
  color: "$neonBlueDefault",

  "&:hover, &:focus": {
    backgroundColor: "$neonBlueDefault",
    color: "$btnHoverText",
  },

  "&[disabled], &[disabled]:hover, &[disabled]:focus": {
    borderColor: "$neonBlue300",
    color: "$neonBlue300",
    backgroundColor: "transparent",
  },
};

export const PURPUREUS_VARIANT = {
  borderColor: "$purpureusDefault",
  color: "$purpureusDefault",

  "&:hover, &:focus": {
    backgroundColor: "$purpureusDefault",
    color: "$btnHoverText",
  },

  "&[disabled], &[disabled]:hover, &[disabled]:focus": {
    borderColor: "$purpureus800",
    color: "$purpureus800",
    backgroundColor: "transparent",
  },

  [`.${darkTheme} &`]: {
    "&[disabled], &[disabled]:hover, &[disabled]:focus": {
      borderColor: "$purpureus300",
      color: "$purpureus300",
    }
  },
};
