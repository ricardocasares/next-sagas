import React, { FunctionComponent as F } from "react";
import { Stack } from "@/components/Stack";

type Counter = {
  count: number;
  increment: () => void;
};

export const Counter: F<Counter> = ({ count, increment }) => (
  <Stack background="#ddd" padding={5}>
    <p>
      Count <span data-testid="count">{count}</span>
    </p>
    <button data-testid="increment" onClick={increment}>
      Increment
    </button>
  </Stack>
);
