import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import client from "../client";
import { InView } from "react-intersection-observer";

import { Parallax } from "react-parallax";

import NewsLetter from "../components/NewsLetter";

const Home = (props) => {
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
            <div style={{ height: "100vh" }} />
          </Parallax>
        </section>

        {props.infoBoxes.map((infoBox, index) => {
          return (
            <InView
              onChange={(inView, entry) => {
                inView === true ? entry.target.classList.add("intersectionObserverTextBoxTrue") : entry.target.classList.remove("intersectionObserverTextBoxTrue");
              }}
              className="intersectionObserverTextBox"
            >
              <section key={index} className="textBox">
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
          <Link className="squareLink" href="/speakers">
            <div className="productBox">
              <h3>Speakers</h3>
              <Image
                src="https://images.ctfassets.net/8cd2csgvqd3m/1MW5Ya0oS4ub8jlu8YkuJQ/da12a5d4d6444a8f65786a7dda4474d0/A9-smoked.png?q=90&fm=webp&w=480&h=480&fit=fill"
                alt="Speaker link image"
                unsized="true"
                loading="lazy"
                quality="100"
              />
              <Link href="/">View all</Link> <BsArrowRight />
            </div>
          </Link>
          <Link className="squareLink" href="/Headphones">
            <div className="productBox">
              <h3>Headphones</h3>
              <Image
                src="https://images.ctfassets.net/8cd2csgvqd3m/4LTok6tVuMsAeckUQAA6qO/39ce54c11181604e691ec101744f9426/h9i_black_hero.png?q=90&fm=webp&w=480&h=480&fit=fill"
                alt="Speaker link image"
                unsized="true"
                loading="lazy"
                quality="100"
              />
              <Link href="/">View all</Link> <BsArrowRight />
            </div>
          </Link>
          <Link className="squareLink" href="/televisions">
            <div className="productBox">
              <h3>Televisions</h3>
              <Image
                src="https://images.ctfassets.net/8cd2csgvqd3m/221e09q878ELXXTP1LFck2/4e1a4fbce8a96eebdc12d0d922a14a6a/BeoVisionV300-77-Closed-Oak-F0.png?q=90&fm=webp&w=480&h=480&fit=fill"
                alt="Speaker link image"
                unsized="true"
                loading="lazy"
                quality="100"
              />
              <Link href="/">View all</Link> <BsArrowRight />
            </div>
          </Link>
        </section>
        <NewsLetter />
      </main>
    </Layout>
  );
};

Home.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { Home = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "frontPage"][0]{
      "imageUrl": image.asset->url,
      "pageTitle": pageTitle,
      "metaDescription": metaDescription,
      "infoBoxes": infoBoxes[],
      "infoBoxImage": infoBoxes[].image.asset->url,
      "productTitle": infoBoxes[].product->title


    }
  `,
    { Home }
  );
};

export default Home;
