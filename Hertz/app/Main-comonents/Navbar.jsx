import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between font-medium items-center text-[20px]">
      <Link href="/">
        <div className="logo flex items-center gap-2.5">
          <img className="w-15 h-12.5" src="Hertz logo.svg" alt="" />
          <h1>HERTZ</h1>
        </div>
      </Link>
      <div className="navItems">
        <ul className="flex gap-5 items-center">
          {/* add theme button */}
          <li>
            <Link className="navbar-link" href="/Explore">
              Explore
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/My-list">
              My list
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/Download">
              Download
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/About-us">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/Account">
              <Image
                src="icons/avatar.svg"
                alt="Avatar.svg"
                width={27}
                height={27}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
