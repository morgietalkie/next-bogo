import styles from "../styles/styles.scss";

import client from "../client";
import Router from "next/router";
import NProgress from "nprogress";

import { AppContext } from "../components/useAppContext";

function MyApp({ Component, pageProps, headerData }) {
  return (
    <AppContext.Provider value={{ headerData }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const headerData = await client.fetch(
    `*[_type == "header"]{
      "linkRef": links[]{
      links->
    },
          "linkImages":links[].image.asset->{url, _id}
    }
`
  );

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, headerData };
};

export default MyApp;

Router.onRouteChangeStart = (url) => {
  // Some page has started loading

  NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
  // Some page has finished loading

  NProgress.done();
};
