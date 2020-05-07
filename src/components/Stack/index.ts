import Box from "ui-box";
import styled from "@emotion/styled";
import { media } from "@/css/media";

export type Stack = {
  space?: number[];
};

const SPACE = [10, 20, 30];

export const Stack = styled(Box)<Stack>`
  > *:not(style) ~ *:not(style) {
    ${({ space = SPACE }) => media({ marginTop: space })}
  }
`;
