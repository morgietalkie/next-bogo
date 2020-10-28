import Head from "next/head";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>Blog</h1>
      </div>
    </Layout>
  );
}
