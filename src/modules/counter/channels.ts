import { eventChannel, END } from "redux-saga";

export const countdownChannel = (seconds: number) =>
  eventChannel(emitter => {
    const ref = setInterval(() => {
      seconds--;
      if (seconds > 0) {
        emitter(seconds);
      } else {
        emitter(END);
      }
    }, 1000);

    return () => clearInterval(ref);
  });
