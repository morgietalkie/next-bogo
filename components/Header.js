import Link from "next/link";
import Logo from "../static/logo.svg";

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
                <Logo />
              </Link>
            </li>
            <div className="linkWrapper">
              <li className="menuLink">
                <Link href="/">Speakers</Link>
              </li>
              <li className="menuLink">
                <Link href="/">Headphones</Link>
              </li>
              <li className="menuLink">
                <Link href="/">Televisions</Link>
              </li>
              <li className="menuLink">
                <Link href="/">Accessories</Link>
              </li>
              <li className="menuLink">
                <Link href="/">Stories</Link>
              </li>
            </div>

            <div className="iconWrapper">
              <li>
                <Link href="/">
                  <AiOutlineQuestionCircle />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <GrLocation />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiOutlineShopping />
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <nav className="subNav">
          <ul>
            <li>
              <Link href="/">Speakers</Link>
            </li>
            <li>
              <Link href="/">Headphones</Link>
            </li>
            <li>
              <Link href="/">Televisions</Link>
            </li>
            <li>
              <Link href="/">Accessories</Link>
            </li>
            <li>
              <Link href="/">Stories</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

function burgerClicked(e) {
  console.log(e.target);
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
