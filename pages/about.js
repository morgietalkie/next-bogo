import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <title>About Yeah</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="content">
        <section>
          <h1>About</h1>
        </section>
      </main>
    </Layout>
  );
}
