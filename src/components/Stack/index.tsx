import css from "./stack.module.css";
import React, { FunctionComponent as F, HTMLProps } from "react";

type Stack = HTMLProps<HTMLDivElement>;

export const Stack: F<Stack> = ({ children, className, ...props }) => (
  <div className={`${css.stack} ${className}`} {...props}>
    {children}
  </div>
);
