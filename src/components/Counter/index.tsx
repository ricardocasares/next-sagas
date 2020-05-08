import React, { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { P } from "./styles";

export type Counter = {
  count: number;
  increment: () => void;
} & Box;

export const Counter: F<Counter> = ({ count, increment, ...props }) => (
  <Box
    padding={[10, 15, 20]}
    border="2px solid #ccc"
    borderRadius={5}
    {...props}
  >
    <P>
      Count <span data-testid="count">{count}</span>
    </P>
    <Button data-testid="increment" onClick={increment}>
      Increment
    </Button>
  </Box>
);
