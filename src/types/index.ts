import { Store } from "redux";
import { AppProps as NextAppProps } from "next/app";
import { State as Counter } from "@/modules/counter";

// STATE
export type State = {
  counter: Counter;
};

// APP
export type AppStore = Store<State>;
export type AppProps = { store: AppStore } & NextAppProps;
