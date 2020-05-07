// import { Stack } from "@/components/Stack";
import { Stack } from "@/components/Stack";
import { Counter } from "@/modules/counter/containers/Counter";

const SPACING = [10, 15, 20];

export default () => (
  <Stack
    margin={SPACING}
    padding={SPACING}
    stackSpacing={SPACING}
    borderRadius="5px"
    border="2px solid #ccc"
  >
    <Counter />
    <Counter />
    <Counter />
  </Stack>
);
