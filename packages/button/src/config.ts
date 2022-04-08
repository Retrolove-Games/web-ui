export const RED_VARIANT = {
  borderColor: "$redDefault",
  color: "$redDefault",

  // Hovers
  "&:hover, &:focus": {
    backgroundColor: "$redDefault",
    color: "$whiteDefault",
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
    color: "$darkDefault",
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
    color: "$darkDefault",
  },

  "&[disabled], &[disabled]:hover, &[disabled]:focus": {
    borderColor: "$purpureus300",
    color: "$purpureus300",
    backgroundColor: "transparent",
  },
};
