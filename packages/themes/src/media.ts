import { breakpoints } from "./breakpoints";

type Variants = "landscape" | "portrait";

type DefaultQueries = keyof typeof breakpoints;

type AllQueries = `${DefaultQueries}${Capitalize<Variants>}` | DefaultQueries;

type MappedQueries = {
  [Property in AllQueries]: string;
};
const mediaHelper = (media: string | number) =>
  `(min-width: ${media}px)`;
const portraitHelper = (media: string | number) =>
  `${media} and (orientation: portrait)`;
const landscapeHelper = (media: string | number) =>
  `${media} and (orientation: landscape)`;

const media = Object.assign({}, ...Object.keys(breakpoints).map((key) => ({
  [`${key}`]: mediaHelper(breakpoints[key as DefaultQueries]),
  [`${key}Portrait`]: portraitHelper(
    mediaHelper(breakpoints[key as DefaultQueries])
  ),
  [`${key}Landscape`]: landscapeHelper(
    mediaHelper(breakpoints[key as DefaultQueries])
  ),
}))) as unknown as MappedQueries;


export { media };
