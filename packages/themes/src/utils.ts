const niceBorder = (color: string, width = 1) => ({
  // border: `solid ${width}px ${color}`,
  boxShadow: `0 0 ${width}px ${width}px ${color} inset`,
});

export const utils = {
  niceBorder1px: (color: string) => niceBorder(color, 1),
  niceBorder2px: (color: string) => niceBorder(color, 2),
  rightTopShadow: (color: string) => ({
    boxShadow: `-1px -1px 4px 0px ${color}`,
  }),
};
