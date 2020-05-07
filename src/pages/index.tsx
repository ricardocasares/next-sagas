import { Stack } from "@/components/Stack";
import { Counter } from "@/modules/counter/containers/Counter";

export default () => (
  <Stack full padded>
    <Counter />
    <Counter />
    <Counter />
  </Stack>
);
