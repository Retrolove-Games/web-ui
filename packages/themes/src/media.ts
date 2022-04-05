const portraitHelper = (media: string) =>
  `${media} and (orientation: portrait)`;
const landscapeHelper = (media: string) =>
  `${media} and (orientation: landscape)`;

export const media = {
  // Small
  small: "only screen and (max-width: 320px)",
  get smallPortrait() {
    return portraitHelper(this.small);
  },
  get smallLandscape() {
    return landscapeHelper(this.small);
  },
  // Medium
  medium: "only screen and (min-width: 768px)",
  get mediumPortrait() {
    return portraitHelper(this.medium);
  },
  get mediumLandscape() {
    return landscapeHelper(this.medium);
  },
};
