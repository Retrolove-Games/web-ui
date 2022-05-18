import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const MenuItemWrapper = styled("li", {
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
    },
  },

  // Themes
  [`.${darkTheme} &`]: {
    "& a, & button": {
      color: "$neonBlueDefault",
      borderBottom: "solid 1px $neonBlueDefault",

      "&:hover, &:focus": {
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

export const SubMenuItemWrapper = styled("li", {
  "& a, & button": {
    color: "$redDefault",
    borderBottomColor: "transparent",
  },

  // Themes
  [`.${darkTheme} &`]: {
    "& a, & button": {
      color: "$whiteDefault",
      borderBottomColor: "transparent",

      "&:hover, &:focus": {
        color: "$dark800",
      },
    },
  },

  // Variants
  variants: {
    layout: {
      mobile: {
        textAlign: "center",
        fontSize: "$mobileP",
      },
      smallDesktop: {
        textAlign: "left",
        fontSize: "$desktopSm",

        "& a, & button": {
          // padding: "0",
        }
      },
      desktop: {
        // fontSize: "$desktopDefault",
      },
    },
  },
});

export const SubMenuWrapper = styled("ul", {
  transition: "height 0.25s linear",
  overflow: "hidden",
  height: `var(--original-height, "auto")`,
  listStyle: "none",

  // Modifiers
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
      smallDesktop: {
        paddingLeft: "$lg",
      },
    },
  },
});

export const Wrapper = styled("ul", {
  width: "100%",
  listStyle: "none",
  padding: "0",

  // Themes
  [`.${darkTheme} &`]: {},

  // Variants
  variants: {},
});
