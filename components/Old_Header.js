import Link from "next/link";
import Logo from "../static/logo.svg";
import LinkWrapper, { getInitialProps } from "../components/LinkWrapper";
import React from "react";
import client from "../client";

import { AiOutlineShopping, AiOutlineQuestionCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    const query = `
    *[_type == "header"][0]{
      links,
      "linkID": links[]._key,
      "linkImage": links[].image.asset->url,
      "linkUrl": links[].links->slug.current,
      "linkTitle": links[].links->title
   ,
  
      }`;
    const params = {};
    client.fetch(query, params).then(
      (data) => {
        this.setState({ isLoaded: true, items: data });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>loading...</div>;
    } else
      return (
        <header>
          <nav className="primaryNav">
            <ul>
              <div role="button" className="burgerMenu" onClick={burgerClicked} tabIndex={0}>
                <div className="burgerLines"></div>
                <div className="burgerLines"></div>
              </div>

              <li id="logo">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
              </li>
              <div className="linkWrapper">
                {this.state.items.links.map((link, i) => {
                  return (
                    <li key={i} className="menuLink">
                      <Link href={`/products/${this.state.items.linkUrl[i]}`}>{this.state.items.linkTitle[i]}</Link>
                    </li>
                  );
                })}
              </div>

              <div className="iconWrapper">
                <li>
                  <Link href="/about">
                    <a>
                      <AiOutlineQuestionCircle />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <GrLocation />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <AiOutlineShopping />
                    </a>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <nav className="subNav">
            <ul>
              {this.state.items.links.map((link, i) => {
                return (
                  <li key={i} className="menuLink">
                    <Link href={`/products/${this.state.items.linkUrl[i]}`}>{this.state.items.linkTitle[i]}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      );
  }
}

export default Header;

function burgerClicked(e) {
  e.target.parentNode.classList.toggle("menuOpen");
}

function scrollFunction() {
  window.addEventListener("scroll", scrolled);
}

function scrolled() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector("header").classList.add("scrolled");
  } else {
    document.querySelector("header").classList.remove("scrolled");
  }
}
