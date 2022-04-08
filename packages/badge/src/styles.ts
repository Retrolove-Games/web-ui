import { styled, keyframes} from "@retrolove-games/ui-themes";

const popIn = keyframes({
  '0%': { transform: 'scale(1.5)' },
  '100%': { transform: 'scale(1)' },
});

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

  "&.animate": {
    animation: `${popIn} 250ms`,
  },

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
