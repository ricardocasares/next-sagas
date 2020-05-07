import css from "./stack.module.css";
import cx from "classcat";
import React, { FunctionComponent as F, HTMLProps } from "react";

type Stack = {
  full?: boolean;
  flex?: boolean;
  small?: boolean;
  large?: boolean;
  padded?: boolean;
} & HTMLProps<HTMLDivElement>;

export const Stack: F<Stack> = ({
  full,
  flex,
  small,
  large,
  padded,
  children,
  className,
  ...props
}) => {
  const styles = cx([
    css.stack,
    {
      [css.full]: full,
      [css.flex]: flex,
      [css.small]: small,
      [css.large]: large,
      [css.padded]: padded,
    },
    className,
  ]);

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};
