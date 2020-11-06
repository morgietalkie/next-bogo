import client from "../../client";
import Layout from "../../components/Layout";
import Head from "next/head";
import { useEffect } from "react";

import Image from "next/image";
import { Parallax } from "react-parallax";

export default function Category(props) {
  useEffect(() => {
    document.querySelector(".categoryContent").classList.remove("fadeIn");

    document.querySelector(".categoryContent").classList.add("fadeOut");

    setTimeout(() => {
      document.querySelector(".categoryContent").classList.remove("fadeOut");

      document.querySelector(".categoryContent").classList.add("fadeIn");
    }, 500),
      [];
  });
  return (
    <Layout>
      <Head>
        <title>{props.category.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="categoryContent">
        <h1>{props.category.title}</h1>
        <Parallax bgImage={props.category.splashImage} bgImageAlt={props.category.title} strength={-50}>
          <div style={{ height: "500px" }} />
        </Parallax>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  // Todo load props data

  const category = await client.fetch(
    ` *[_type == "category" && slug.current == "${slug}"][0]{
    "slug": slug.current,
    title,
    "splashImage": splashImage.asset->url
 
  }
  `
  );

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths({ params }) {
  // TODO find page names
  const data = await client.fetch(`*[_type == "category"]{
    "slug": slug.current
  }`);

  return {
    paths: data.map(({ slug }) => `/categories/${slug}`),
    fallback: false,
  };
}
