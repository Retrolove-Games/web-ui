import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const MenuItem = styled("li", {

  display: "block",
  marginBottom: "$md",

  "& a, & button": {
    color: "$redDefault",
    border: "none",
    borderBottom: "solid 1px $redDefault",

    background: "transparent",
    textAlign: "inherit",

    width: "100%",

    display: "block",

    fontFamily: "$body",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: "$lh1618",
    padding: "$sm 0",
    cursor: "pointer",

    "&:hover, &:focus": {
      color: "$red400",
    }
  },


  // Themes
  [`.${darkTheme} &`]: {


    "& a, & button": {
      color: "$neonBlueDefault",
      borderBottom: "solid 1px $neonBlueDefault",

      "&:hover, &:focus": {
        color: "$neonBlue300",
      }
    },
  },

  // Variants
  variants: {
    layout: {
      mobile: {
        textAlign: "center",
        fontSize: "$mobileH6",
      },
      smallDesktop: {
        textAlign: "left",
        fontSize: "$desktopSm",
      },
      desktop: {
        fontSize: "$desktopDefault",
      },
    }
  },
});

export const SubMenuWrapper = styled("ul", {
  transition: "height .25s",

  // Modifiers
  '&[aria-expanded="false"]': {
    height: 0
  },

  // Themes
  [`.${darkTheme} &`]: {

  },

  // Variants
  variants: {

  },
});

export const Wrapper = styled("ul", {
  width: "100%",
  listStyle: "none",
  padding: "0",

  // Themes
  [`.${darkTheme} &`]: {

  },

  // Variants
  variants: {

  },
});
