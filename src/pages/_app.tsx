import React, { useEffect, FunctionComponent as F } from "react";
import { Global } from "@emotion/core";
import { Provider as ReduxProvider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import { AppProps } from "@/types";
import { configureStore } from "@/store";
import { clientReady } from "@/modules/app";
import { reset } from "@/css/reset";

const App: F<AppProps> = ({ store, pageProps, Component }) => {
  useEffect(() => {
    store.dispatch(clientReady());
  }, []);

  return (
    <ReduxProvider store={store}>
      <Global styles={reset} />
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

const withStore = withRedux(configureStore);
export default withStore(withReduxSaga(App));
