import client from "../../client";
import Layout from "../../components/Layout";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";

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
      <main className="categoryContent">
        <h1>{props.category.title}</h1>
        <Parallax bgImage={props.category.splashImage} bgImageAlt={props.category.title} strength={-50}>
          <div style={{ height: "500px" }} />
        </Parallax>

        {props.category.subCategories && (
          <section className="categoryList">
            <ul>
              <li className="selected" id="productlist">
                <Link href="/categories/speakers#productlist">View All</Link>
              </li>

              {props.category.subCategories.map((subCategory) => {
                return (
                  <li key={subCategory._id}>
                    <Link href={`/categories/speakers?subcategory=${subCategory.slug.current}#productlist`}>{subCategory.title}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section className="productList">
          <ul>
            {props.products.map((product) => {
              return (
                <li key={product._id}>
                  <Link href={`/product/${product.slug.current}`}>
                    <a>
                      <Image src={product.image} alt={product.title} unsized="true" layout="fill" loading="lazy" />
                      <div className="productInfo">
                        <div className="colorList">
                          <div className="colorBackground primaryColor">
                            <div className="color " style={{ backgroundColor: product.productColor.color.color.hex }}></div>
                          </div>
                          {product.variants.map((variant) => {
                            return (
                              <div key={variant.color.color.hex} className="colorBackground">
                                <div className="color" style={{ backgroundColor: variant.color.color.hex }}></div>
                              </div>
                            );
                          })}
                        </div>
                        <p className="title"> {product.title}</p>
                        <p className="description">{product.productTitle.title}</p>
                        <p className="price">{product.price.price} kr.</p>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
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
    "splashImage": splashImage.asset->url,
    "subCategories":children[]->{
      title,
      slug, _id
    }
 
  }
  `
  );

  const products = await client.fetch(
    ` *[_type == "product" && categories[0]->slug.current == "${slug}" ] {
   
  
      "image": defaultProductVariant.images[0].asset->url,
  title, 
   slug,
    "productColor":defaultProductVariant{color{name, color{hex}}},
  "price":defaultProductVariant{price},
  "productTitle":defaultProductVariant{title},

  "category":categories[0]->slug.current,
  _id,
"variants": variants[]{
  color{name, color{hex}},
price,
title,
images[0]{asset->{url}},

}
}
  `
  );

  return {
    props: {
      category,
      products,
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
