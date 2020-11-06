import styles from "../styles/styles.scss";
import client from "../client";

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
