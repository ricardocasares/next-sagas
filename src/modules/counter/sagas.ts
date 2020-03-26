import { put, take, call } from "redux-saga/effects";
import { countdown, countdownChannel } from "@/modules/counter";

export function* sagas() {
  const channel = yield call(countdownChannel, 10);

  try {
    while (true) {
      let seconds = yield take(channel);
      yield put(countdown(seconds));
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log("countdown finished");
  }
}
