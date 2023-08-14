"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, faclose } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const TOGGLE_MENU = () => {
    if (toggle === false) {
      console.log("toggle on");
      setToggle(true);
    } else {
      console.log("toggle off");
      setToggle(false);
    }
  };

  return (
    <div className="container-fluid nav_fluid sticky-top">
      <div className="container">
        <input type="checkbox" id="check_btn" />
        <nav className="navbar">
          <div className="logo">
            <Link href="/" className="logo_text">
              frymates
            </Link>
          </div>
          <ul>
            <Link href="/" className="nav_link">
              home
            </Link>
            <Link href="/gallery" className="nav_link">
              gallery
            </Link>
            <Link href="/roadmap" className="nav_link">
              roadmap
            </Link>
            <Link href="/manifesto" className="nav_link">
              manifesto
            </Link>
            <Link href="/" className="nav_link">
              connect
            </Link>
          </ul>
          <label htmlFor="check_btn">
            {toggle === false ? (
              <FaBars onClick={TOGGLE_MENU} className="fa_icon" />
            ) : (
              <IoCloseSharp
                onClick={TOGGLE_MENU}
                className="fa_icon fa_close"
              />
            )}
          </label>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
