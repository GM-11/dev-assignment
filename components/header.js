import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
function Header() {
  return (
    <div className="bg-background text-white hidden rounded-3xl m-5 md:flex md:flex-row md:justify-between">
      <div className="px-6 py-4">ADILO</div>
      <ul className="flex  m-3  flex-row">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=""
          className="mx-5 py-1"
        >
          Home
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=""
          className="mx-5 py-1"
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=""
          className="mx-5 py-1"
        >
          Contact Us
        </ScrollLink>
        <Link
          href="/screens/login"
          className="mx-5 text-background py-1 px-3 bg-white rounded-3xl border-2 border-white hover:bg-transparent hover:text-white  ease-in duration-100"
        >
          Login
        </Link>
      </ul>
    </div>
  );
}

export default Header;
