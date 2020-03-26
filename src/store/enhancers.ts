import { compose, StoreEnhancer } from "redux";

const IS_BROWSER = typeof window !== "undefined";

export const withDevTools = (mw: StoreEnhancer<any>) => {
  if (IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(mw);
  }

  return compose(mw);
};
