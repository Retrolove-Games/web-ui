---
to: packages/<%= h.changeCase.paramCase(name) %>/src/styles.ts
---
import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {

  // Themes
  [`.${darkTheme} &`]: {

  },

  // Variants
  variants: {

  },
});
