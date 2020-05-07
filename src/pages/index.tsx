// import { Stack } from "@/components/Stack";
import { Stack } from "@/components/Stack";
import { Counter } from "@/modules/counter/containers/Counter";

const SPACING = [10, 15, 20];

export default () => (
  <Stack padding={SPACING} stackSpacing={SPACING}>
    <Counter />
    <Counter />
    <Counter />
  </Stack>
);
