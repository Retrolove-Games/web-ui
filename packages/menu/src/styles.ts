import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const RootElement = styled("button", {});

export const SubElement = styled("button", {});

export const SubMenuFooterWrapper = styled("li", {
  textAlign: "inherit",

  // Variants
  variants: {
    layout: {
      mobile: {
        paddingTop: "$xl",
      },
      desktop: {
        paddingTop: "$xxl",
      },
    },
  },
});

export const MenuFooterWrapper = styled("li", {
  textAlign: "inherit",

  // Variants
  variants: {
    layout: {
      mobile: {
        paddingTop: "$xl",
      },
      smallDesktop: {
        paddingTop: "$xl",
      },
      desktop: {
        paddingTop: "$xxl",
      },
    },
  },
});

export const SubMenuLabelWrapper = styled("li", {
  display: "block",
  marginBottom: "$md",

  color: "$redDefault",
  border: "none",
  borderBottom: "solid 1px $redDefault",

  background: "transparent",
  textAlign: "inherit",

  fontFamily: "$body",
  textTransform: "uppercase",
  textDecoration: "none",
  lineHeight: "$lh1618",
  padding: "$sm 0",

  // Themes
  [`.${darkTheme} &`]: {
    color: "$neonBlueDefault",
    borderBottom: "solid 1px $neonBlueDefault",
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
    },
  },
});

export const MenuItemWrapper = styled("li", {
  display: "block",

  [`& a, & ${RootElement}`]: {
    color: "$redDefault",
    border: "none",
    borderBottom: "solid 1px $redDefault",
    padding: "0 0",

    background: "transparent",
    textAlign: "inherit",

    width: "100%",

    display: "block",

    fontFamily: "$body",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: "$lh1618",
    cursor: "pointer",

    "&:hover": {
      color: "$red400",
    },
  },

  // Themes
  [`.${darkTheme} &`]: {
    [`& a, & ${RootElement}`]: {
      color: "$neonBlueDefault",
      borderBottom: "solid 1px $neonBlueDefault",

      "&:hover": {
        color: "$neonBlue300",
      },
    },
  },

  // Variants
  variants: {
    layout: {
      mobile: {
        textAlign: "center",
        fontSize: "$mobileH6",
        marginBottom: "$md",
      },
      smallDesktop: {
        textAlign: "left",
        fontSize: "$desktopSm",
        marginBottom: "$md",
      },
      desktop: {
        fontSize: "$desktopDefault",
        marginBottom: "$md",

        [`& a, & ${RootElement}`]: {
          padding: "$xs 0",
        }
      },
    },
  },
});

export const SubMenuItemWrapper = styled("li", {
  [`& a, & ${SubElement}`]: {
    color: "$redDefault",
    borderBottomColor: "transparent",

    // Active element
    '&[aria-current="page"], &[aria-current="page"]:hover': {
      color: "$purpureusDefault",
    },
  },

  // Themes
  [`.${darkTheme} &`]: {
    [`& a, & ${SubElement}`]: {
      color: "$whiteDefault",
      borderBottomColor: "transparent",

      "&:hover, &:focus": {
        color: "$dark800",
      },

      // Active element
      '&[aria-current="page"], &[aria-current="page"]:hover': {
        color: "$redDefault",
      },
    },
  },

  // Variants
  variants: {
    layout: {
      mobile: {
        textAlign: "center",
        fontSize: "$mobileP",
        marginBottom: "$sm",
      },
      smallDesktop: {
        textAlign: "left",
        fontSize: "$desktopXs",
        marginBottom: "0",
      },
      desktop: {
        fontSize: "$desktopSm",
      },
    },
  },
});

export const SubMenuWrapper = styled("ul", {
  transition: "height 0.25s linear",
  overflow: "hidden",
  height: `var(--original-height, "auto")`,
  listStyle: "none",
  paddingLeft: "$sm",

  // Modifiers & states
  '&[aria-expanded="false"][data-ready="true"]': {
    height: 0,
  },

  // Variants
  variants: {
    layout: {
      mobile: {
        marginTop: "$md",
        padding: "0",

        [`& ${SubMenuItemWrapper} ~ ${SubMenuItemWrapper}`]: {
          marginTop: "$sm",
        },
      },
    },
  },
});

export const SlidingSubMenuWrapper = styled("ul", {
  position: "absolute",
  width: "100%",
  top: "0%",
  listStyle: "none",
  padding: "0",
  paddingLeft: "$sm",

  [`&[data-level="1"]`]: {
    left: "100%",
  },

  [`&[data-level="2"]`]: {
    left: "200%",
  },

  [`&[data-level="3"]`]: {
    left: "300%",
  },

  [`&[aria-hidden="true"]`]: {
    display: "none",
  },
});

export const Wrapper = styled("ul", {
  width: "100%",
  listStyle: "none",
  padding: "0",
  position: "relative",
  transition: "all .5s",

  // Mods
  '&[data-level="1"]': { transform: "translate3d(-100%, 0, 0)" },
  '&[data-level="2"]': { transform: "translate3d(-200%, 0, 0)" },
  '&[data-level="3"]': { transform: "translate3d(-300%, 0, 0)" },

  // Themes
  [`.${darkTheme} &`]: {},

  // Variants
  variants: {},
});
