import type { Colors } from "./colors";

const niceBorder = (color: Colors, width = 1) => ({
  outline: `solid ${width}px ${color}`,
  boxShadow: `0 0 ${width + 1}px 0 ${color} inset`,
});

export const utils = {
  niceBorder1px: (color: Colors) => niceBorder(color, 1),
  niceBorder2px: (color: Colors) => niceBorder(color, 2),
};
