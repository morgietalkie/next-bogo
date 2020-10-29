import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import MailIcon from "../static/mail-icon.svg";

import { Parallax } from "react-parallax";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Well done</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="contentIndex">
        <section className="splashImage">
          <Parallax bgImage="/static/primaryBackground.jpg" bgImageAlt="the cat" strength={-100}>
            <div style={{ height: "100vh" }} />
          </Parallax>
        </section>

        <section className="textBox">
          <div className="leftWrapper">
            <div className="textContent">
              <p className="category">BEOPLAY H95</p>
              <h2>Takes you places</h2>
              <span>–</span>
              <p className="description">Ears embraced by soft cups and background noises actively cancelled, Beoplay H95 transport you to your own world. </p>
              <Link href="/">Shop now</Link> <BsArrowRight />
            </div>
          </div>
          <div className="rightWrapper">
            <Parallax
              bgImage="https://images.ctfassets.net/8cd2csgvqd3m/ycJA1hY3euZ212UAG4Ucf/3364522a764de79b4fdbf2dfd46f4491/H95_travel_man_2.jpg?q=90&fm=webp&w=828&h=828&fit=fill"
              bgImageAlt="the cat"
              strength={100}
            >
              <div style={{ height: "100vh" }} />
            </Parallax>
          </div>
        </section>
        <section className="textBox">
          <div className="leftWrapper">
            <div className="textContent">
              <p className="category">BEOREMOTE HALO</p>
              <h2>One touch to music – easy and simple</h2>
              <span>–</span>
              <p className="description">
                Beoremote Halo gives you all the convenience of a simple user interface to operate your Bang & Olufsen music system. When you get close to Beoremote Halo, the display lights up and
                offers you a one button press to select your music. There is no need to use your mobile device or to pull anything out of your pocket and fiddle around trying to find the right app to
                get started.{" "}
              </p>
              <Link href="/">Discover more</Link> <BsArrowRight />
            </div>
          </div>
          <div className="rightWrapper">
            <Parallax
              bgImage="https://images.ctfassets.net/8cd2csgvqd3m/5yolox57Zj1KjlnS899Cq8/f8373b6ce3e770e7a0b7518a3539040b/LS_07.2020_Halo_Alu_Table.jpg?q=90&fm=webp&w=828&h=828&fit=fill"
              bgImageAlt="the cat"
              strength={100}
            >
              <div style={{ height: "100vh" }} />
            </Parallax>
          </div>
        </section>

        <section className="productGrid">
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
        </section>

        <section className="contactBox">
          <MailIcon className="mailIcon" />
          <h4>STAY IN TOUCH</h4>
          <p>Sign up for our newsletter to receive customized product news, updates and special invites.</p>

          <form action="">
            <input type="text" placeholder="Email" />
            <button>
              Subscribe <BsArrowRight />
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}
