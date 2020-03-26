import "@/css/app.css";

import React, { useEffect, FunctionComponent as F } from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import { AppProps } from "@/types";
import { configureStore } from "@/store";
import { clientReady } from "@/modules/app";

const App: F<AppProps> = ({ store, pageProps, Component }) => {
  useEffect(() => {
    store.dispatch(clientReady());
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

const withStore = withRedux(configureStore);
export default withStore(withReduxSaga(App));
