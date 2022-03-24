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
      ...colors
    },
    fonts: {
      primary: `'Source Sans Pro', sans-serif`,
      secondary: `'Zilla Slab Highlight', cursive`,
    }
  },
});
