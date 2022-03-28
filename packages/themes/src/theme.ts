import { createStitches } from "@stitches/react";
import { colors } from "./colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...colors,
    },
    fonts: {
      primary: `'Source Sans Pro', sans-serif`,
      secondary: `'Zilla Slab Highlight', cursive`,
    },
    fontSizes: {
      desktopSmall: "1.04rem",
      desktopDefault: "1.25rem",
    },
    lineHeights: {
      lh: "1em",
      lh12: "1.2em",
      lh13: "1.3em",
      lh145: "1.45em",
      lh15: "1.5em",
      lh1618: "1.618em",
      lh1842: "1.842em",
    },
    shadows: {
      neonBlueDefaultBorder: "rgba(127, 212, 202, .29)",
      redDefaultBorder: "rgba(233, 55, 80, .29)",
    },
  },
  utils: {
    niceBorder: (color: string, width = 2) => ({
      border: `solid ${width}px ${color}`,
      boxShadow: `0 0 ${width + 2}px 0 ${color}Border`,
    }),
  },
});
