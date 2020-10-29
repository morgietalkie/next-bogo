import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="content">
        <Head>
          <title>About Yeah</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section>
          <h1>About</h1>
        </section>
      </main>
    </Layout>
  );
}
