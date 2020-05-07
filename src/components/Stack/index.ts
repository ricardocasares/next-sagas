import styled from "@emotion/styled";
import { space } from "@/css/props";
import { Box } from "@/components/Box";

export type Stack = { space?: number | number[] } & Box;

export const Stack = styled(Box)<Stack>`
  > *:not(style) ~ *:not(style) {
    ${space}
  }
`;
