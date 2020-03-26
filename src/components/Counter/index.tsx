import css from "./counter.module.css";
import React, { FunctionComponent as F } from "react";

type Counter = {
  count: number;
  increment: () => void;
};

export const Counter: F<Counter> = ({ count, increment }) => (
  <div className={css.counter}>
    <p>
      Count <span data-testid="count">{count}</span>
    </p>
    <button data-testid="increment" onClick={increment}>
      Increment
    </button>
  </div>
);
