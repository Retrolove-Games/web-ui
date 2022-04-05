type Variants = "landscape" | "portrait";
type BaseQueries = keyof typeof media;
type AllQueries = `${BaseQueries}${Capitalize<Variants>}` | BaseQueries;
type MappedQueries = {
  [Property in AllQueries]: string;
};

const portraitHelper = (media: string) =>
  `${media} and (orientation: portrait)`;
const landscapeHelper = (media: string) =>
  `${media} and (orientation: landscape)`;

const media = {
  // Small
  small: "only screen and (max-width: 320px)",
  // Medium
  medium: "only screen and (min-width: 768px)",
};

// eslint-disable-next-line array-callback-return
const additionalMedia = Object.keys(media).map((key) => ({
  [`${key}Portrait`]: portraitHelper(media[key as BaseQueries]),
  [`${key}Landscape`]: landscapeHelper(media[key as BaseQueries]),
}));

const decoratedMedia = {
  ...media,
  ...additionalMedia,
} as unknown as MappedQueries;

export { decoratedMedia as media };
