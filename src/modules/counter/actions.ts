import { ActionType, Increment, Countdown } from "./types";

export const increment = (): Increment => ({
  type: ActionType.INCREMENT
});

export const countdown = (payload: number): Countdown => ({
  payload,
  type: ActionType.COUNTDOWN
});
