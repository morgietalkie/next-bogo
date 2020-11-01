import client from "../client";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";

const Category = (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article>
        <h1>{props.title}</h1>

        <p style={{ margin: "200px 0 0" }}>{props.title}</p>
      </article>
    </Layout>
  );
};

Category.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { category = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "category" && slug.current == $category][0]
  `,
    { category }
  );
};

export default Category;
