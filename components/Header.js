import Link from "next/link";
import Logo from "../static/logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="id">
            <Link href="/">
              <Logo />
            </Link>
          </li>
          <li className="id">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="id">
            <Link href="/about">About</Link>
          </li>
          <li className="id">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
