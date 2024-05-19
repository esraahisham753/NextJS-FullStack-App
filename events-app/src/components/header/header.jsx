import Image from "next/image";
import Link from "next/link";
import logo from "./background.jpg";

const Header = () => (
  <header>
    <div className="topNav">
      <Image src={logo} alt="logo" width={50} height={50} />
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
    <h1>Es-Events App</h1>
  </header>
);

export default Header;
