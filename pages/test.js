import Head from "next/head";
import Layout from "../components/Layout";

export default function Test() {
  return (
    <Layout>
      <main className="content">
        <Head>
          <title>Test Yeah</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section>
          <h1>Test</h1>
        </section>
      </main>
    </Layout>
  );
}
