import client from "../../client";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";

const Post = (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article>
        <h1>{props.title}</h1>

        {props.defaultProductVariant.images.map((image, index) => {
          return (
            // <Image
            //   src="https://images.ctfassets.net/8cd2csgvqd3m/1MW5Ya0oS4ub8jlu8YkuJQ/da12a5d4d6444a8f65786a7dda4474d0/A9-smoked.png?q=90&fm=webp&w=480&h=480&fit=fill"
            //   alt="Speaker link image"
            //   unsized="true"
            //   loading="lazy"
            //   quality="100"
            // />

            <h1>{image.asset.url}</h1>
          );
        })}
      </article>
    </Layout>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { product = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "product" && slug.current == $product][0]
  `,
    { product }
  );
};

export default Post;
