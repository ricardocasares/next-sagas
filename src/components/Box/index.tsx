import css from "./box.module.css";
import cxx from "classcat";
import React, { FunctionComponent as F, HTMLProps } from "react";

export type Box = {
  flex?: boolean;
  grow?: boolean;
  column?: boolean;
} & HTMLProps<HTMLDivElement>;

export const Box: F<Box> = ({
  flex,
  grow,
  column,
  children,
  className,
  ...props
}) => {
  const styles = cxx([
    css.box,
    {
      [css.flex]: flex,
      [css.grow]: grow,
      [css.column]: column,
    },
    className,
  ]);

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};
