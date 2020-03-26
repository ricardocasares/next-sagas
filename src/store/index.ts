import createSagaMiddleware from "redux-saga";
import { MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";

import { sagas } from "@/store/sagas";
import { initial } from "@/store/state";
import { reducer } from "@/store/reducer";
import { withDevTools } from "@/store/enhancers";

export const configureStore: MakeStore = (state = initial, options) => {
  const saga = createSagaMiddleware();
  const middleware = withDevTools(applyMiddleware(saga));
  const store = createStore(reducer, state, middleware);
  const { isServer, req = null } = options;

  if (req || !isServer) {
    (store as any).sagaTask = saga.run(sagas);
  }

  return store;
};
