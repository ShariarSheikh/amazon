import "../styles/globals.scss";
import { Provider as AuthProvider } from "next-auth/client";

import { Provider } from "react-redux";
import {store} from "../redux/store";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
