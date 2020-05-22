import { Stack } from "@/components/Stack";
import { Counter } from "@/modules/counter/containers/Counter";

const SPACING = [10, 15, 20];

export const Page = () => (
  <Stack p={SPACING} stackSpacing={SPACING}>
    <Counter />
    <Counter />
    <Counter />
  </Stack>
);

export default Page;
