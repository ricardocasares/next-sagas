import fp from "facepaint";

export const MOBILE = 420;
export const TABLET = 920;
export const DESKTOP = 1120;

export const media = fp([
  `@media(min-width: ${MOBILE}px)`,
  `@media(min-width: ${TABLET}px)`,
  `@media(min-width: ${DESKTOP}px)`,
]);
