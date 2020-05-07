import styled from "@emotion/styled";
import { stackSpacing, StackSpacingProps } from "@/css/props";
import { Box } from "@/components/Box";

export type Stack = StackSpacingProps & Box;

export const Stack = styled(Box)<Stack>`
  > *:not(style) ~ *:not(style) {
    ${stackSpacing}
  }
`;
