import Link from "next/link";
import Logo from "../static/logo.svg";
import React, { Component, createContext } from "react";
import Image from "next/image";

import { useAppContext, AppContext } from "./useAppContext";

import { AiOutlineShopping, AiOutlineQuestionCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

class Header extends React.Component {
  componentDidMount() {
    scrollFunction();
  }

  render() {
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
            <AppContext.Consumer>
              {(headerData) => {
                return (
                  <div className="linkWrapper">
                    {headerData.headerData[0].linkRef.map((link, i) => {
                      return (
                        <li id={`linkID${i}`} key={link.links._id} className="menuLink" onMouseOut={reduceImg} onMouseOver={expandImg}>
                          <Link href={`/${link.links.slug.current}`}>{link.links.title}</Link>
                        </li>
                      );
                    })}

                    <div className="imageWrapper">
                      {headerData.headerData[0].linkImages.map((image, i) => {
                        return <Image key={image._id} id={`imageID${i}`} src={image.url} alt="altText" unsized="true" loading="lazy" quality="100" />;
                      })}
                    </div>
                  </div>
                );
              }}
            </AppContext.Consumer>

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
            <AppContext.Consumer>
              {(headerData) => {
                return (
                  <div className="linkContainer">
                    {headerData.headerData[0].linkRef.map((link, i) => {
                      return (
                        <li key={link.links._id} className="menuLink">
                          <Link href={`/${link.links.slug.current}`}>{link.links.title}</Link>
                        </li>
                      );
                    })}
                  </div>
                );
              }}
            </AppContext.Consumer>
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

function expandImg(e) {
  let linkID = e.target.parentNode.id;

  let ID = linkID.replace("linkID", "");

  let imageWrapper = e.target.parentNode.parentNode;

  console.log(imageWrapper);

  imageWrapper.querySelector("#imageID" + ID).style.maxWidth = "50vw";

  imageWrapper.querySelector(".imageWrapper").style.opacity = "1";
}

function reduceImg(e) {
  let linkID = e.target.parentNode.id;

  let ID = linkID.replace("linkID", "");

  let imageWrapper = e.target.parentNode.parentNode;

  imageWrapper.querySelector("#imageID" + ID).style.maxWidth = "0vw";

  imageWrapper.querySelector(".imageWrapper").style.opacity = "0";
}
