import css from "./counter.module.css";
import React, { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { Stack } from "@/components/Stack";

type Counter = {
  count: number;
  increment: () => void;
};

export const Counter: F<Counter> = ({ count, increment }) => (
  <Box flex column>
    <Stack className={css.counter} small>
      <p>
        Count <span data-testid="count">{count}</span>
      </p>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
    </Stack>
  </Box>
);
