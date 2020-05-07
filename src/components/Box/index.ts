import {
  margin,
  MarginProps,
  padding,
  PaddingProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  compose,
} from "styled-system";
import styled from "@emotion/styled";

export type Box = MarginProps & PaddingProps & BackgroundProps & BorderProps;

export const Box = styled.div<Box>(
  compose(margin, padding, background, border)
);
