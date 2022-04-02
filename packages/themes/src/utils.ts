import type { Colors } from "./colors";

const niceBorder = (color: Colors, width = 1) => ({
  outline: `solid ${width}px ${color}`,
  boxShadow: `0 0 ${width + 2}px 0 ${color}Border`,
});

export const utils = {
  niceBorder1px: (color: Colors) => niceBorder(color, 2),
  niceBorder2px: (color: Colors) => niceBorder(color, 2),
};
