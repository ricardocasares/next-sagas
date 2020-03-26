import { Reducer } from "redux";
import { State, Actions, ActionType } from "./types";

export const initial: State = {
  count: 10
};

export const reducer: Reducer<State, Actions> = (state = initial, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.COUNTDOWN:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
