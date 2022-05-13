import { createStitches } from "@stitches/react";
import { colors } from "./colors";
import { utils } from "./utils";
import { media } from "./media";
import { space } from "./space";
import { fonts, lineHeights, fontSizes, fontWeights } from "./typography";

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
      ...fonts,
    },
    fontSizes: {
      ...fontSizes,
    },
    fontWeights: {
      ...fontWeights,
    },
    lineHeights: {
      ...lineHeights,
    },
    shadows: {
      ...colors,
      neonBlueDefaultBorder: "rgba(127, 212, 202, .29)",
      redDefaultBorder: "rgba(233, 55, 80, .29)",
    },
    space: {
      ...space,
    }
  },
  utils: {
    ...utils,
  },
  media: {
    ...media,
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});
