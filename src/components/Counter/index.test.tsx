import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./index";

test("shows the count and a button", () => {
  const count = 10;
  const increment = jest.fn();

  const { getByTestId } = render(
    <Counter count={count} increment={increment}></Counter>
  );

  const counter = getByTestId("count");
  const button = getByTestId("increment");

  fireEvent(
    button,
    new MouseEvent("click", { bubbles: true, cancelable: true })
  );

  expect(counter.textContent).toMatch(/10/);
  expect(increment).toHaveBeenCalledTimes(1);
});
