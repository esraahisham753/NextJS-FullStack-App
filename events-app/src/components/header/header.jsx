import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";

const Header = () => (
  <header>
    <div className="topNav">
      <Link href="/" className="topNav-brand">
        <Image src={logo} alt="logo" width={100} height={100} />
        <h1>ESEVENTS</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </div>
    <h2>Register for your favorite events</h2>
  </header>
);

export default Header;
