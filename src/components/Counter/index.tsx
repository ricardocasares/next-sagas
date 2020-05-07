import React, { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { P } from "./styles";

export type Counter = {
  count: number;
  increment: () => void;
};

export const Counter: F<Counter> = ({ count, increment }) => (
  <Box padding={[10, 15, 20]} border="2px solid #ccc" borderRadius={5}>
    <P>
      Count <span data-testid="count">{count}</span>
    </P>
    <Button data-testid="increment" onClick={increment}>
      Increment
    </Button>
  </Box>
);
