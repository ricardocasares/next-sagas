import { css } from "@emotion/core";
import normalize from "emotion-normalize";

export const reset = css`
  ${normalize}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Inconsolata", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
`;
