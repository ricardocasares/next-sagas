import React, { useEffect, FunctionComponent as F } from "react";
import { cache } from "@emotion/css";
import { Provider as ReduxProvider } from "react-redux";
import { CacheProvider as EmotionProvider } from "@emotion/react";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import { AppProps } from "@/types";
import { configureStore } from "@/store";
import { clientReady } from "@/modules/app";
import { globalCss } from "@/css/global";

const App: F<AppProps> = ({ store, pageProps, Component }) => {
  useEffect(() => {
    store.dispatch(clientReady());
  }, []);

  return (
    <EmotionProvider value={cache}>
      {globalCss}
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </EmotionProvider>
  );
};

const withStore = withRedux(configureStore);
export default withStore(withReduxSaga(App));
