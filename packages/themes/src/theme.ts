import { createStitches } from "@stitches/react";

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
      dark500: "#252220",
      darkDefault: "$dark500",
      white1000: "#ffffff",
      whiteDefault: "$white1000"
    },
  },
});
