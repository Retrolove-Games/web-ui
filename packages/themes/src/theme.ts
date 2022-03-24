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
  },
});
