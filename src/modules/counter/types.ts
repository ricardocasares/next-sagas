import { Action } from "redux";

export type State = {
  count: number;
};

export enum ActionType {
  COUNTDOWN = "@module/counter/COUNTDOWN",
  INCREMENT = "@module/counter/INCREMENT"
}

export interface Increment extends Action<ActionType.INCREMENT> {}
export interface Countdown extends Action<ActionType.COUNTDOWN> {
  readonly payload: number;
}

export type Actions = Increment | Countdown;
