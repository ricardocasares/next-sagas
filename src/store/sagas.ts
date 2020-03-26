import { take, fork } from "redux-saga/effects";
import { ActionType as App } from "@/modules/app";
import { sagas as counter } from "@/modules/counter";

export function* sagas() {
  yield take(App.CLIENT_READY);
  yield fork(counter);
}
