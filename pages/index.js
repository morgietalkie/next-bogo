import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import client from "../client";
import { InView } from "react-intersection-observer";
import { useEffect } from "react";
import { Parallax } from "react-parallax";

import NewsLetter from "../components/NewsLetter";

const Home = (props) => {
  useEffect(
    () =>
      setTimeout(() => {
        document.querySelector(".contentIndex").style.opacity = "1";
      }, 500),
    []
  );

  return (
    <Layout>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="contentIndex">
        <section className="splashImage">
          <Parallax bgImage={props.imageUrl} bgImageAlt="the cat" strength={-100}>
            <div style={{ height: "calc(100vh - 40px)" }} />
          </Parallax>
        </section>

        {props.infoBoxes.map((infoBox, index) => {
          return (
            <InView
              key={index}
              onChange={(inView, entry) => {
                inView === true ? entry.target.classList.add("intersectionObserverTextBoxTrue") : entry.target.classList.remove("intersectionObserverTextBoxTrue");
              }}
              className="intersectionObserverTextBox"
            >
              <section className="textBox">
                <div className="leftWrapper">
                  <div className="textContent">
                    <p className="category">{props.productTitle[index]}</p>
                    <h2>{infoBox.title}</h2>
                    <span>–</span>
                    <p className="description">{infoBox.description} </p>
                    <Link href="/">{infoBox.ctaButton}</Link> <BsArrowRight />
                  </div>
                </div>
                <div className="rightWrapper">
                  <Parallax bgImage={props.infoBoxImage[index]} bgImageAlt="the cat" strength={50}>
                    <div style={{ height: "100vh" }} />
                  </Parallax>
                </div>
              </section>
            </InView>
          );
        })}

        <section className="productGrid">
          {props.links.map((link, i) => {
            return (
              <Link key={link.links.title} className="squareLink" href={`/${link.links.slug.current}`}>
                <div className="productBox">
                  <h3>{link.links.title}</h3>
                  <Image src={props.linkImages[i].url} alt="Speaker link image" loading="lazy" width={350} height={350} />
                  <Link href={`/${link.links.slug.current}`}>View all</Link> <BsArrowRight />
                </div>
              </Link>
            );
          })}
        </section>
        <NewsLetter />
      </main>
    </Layout>
  );
};

export default Home;

Home.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { Home = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "frontPage"][0]{
      "imageUrl": image.asset->url,
       pageTitle,
       metaDescription,
      infoBoxes,
      "infoBoxImage": infoBoxes[].image.asset->url,
      "productTitle": infoBoxes[].product->title,
      "links":
      links[]{
        links->
      },
      "links":links[]{links->,},
	"linkImages": links[].image.asset->{url, _id}

    }

  `,
    { Home }
  );
};
