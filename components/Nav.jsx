"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Web3 from "web3";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [pathname, setPathName] = useState(false);
  const [account, setAccount] = useState(null);

  const TOGGLE_MENU = () => {
    if (toggle === false) {
      console.log("toggle on");
      setToggle(true);
    } else {
      console.log("toggle off");
      setToggle(false);
    }
  };

  const CHECK_PATH = () => {
    if (window.location.pathname === "/") {
      setPathName(false);
    } else {
      setPathName(true);
    }
  };

  async function CONNECT() {
    if (window.ethereum) {
      await window.ethereum.send("eth_requestAccounts");
      window.web3 = new Web3(window.ethereum);

      let accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
  }

  useEffect(() => {
    setInterval(() => {
      CHECK_PATH();
    }, 1);

    CONNECT();
  }, [pathname]);

  return (
    <div
      className={
        pathname === true ? "navbar_bg" : "container-fluid nav_fluid sticky-top"
      }
    >
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
            <Link
              href=""
              className="nav_link_connect"
              onClick={() => CONNECT()}
            >
              <div className="btn_connect">
                <button>
                  <Image
                    src={"./assets/logos_metamask-icon.png"}
                    width={32}
                    height={0}
                    alt=""
                    className="img-fluid me-3"
                  />
                  {account && account > 0
                    ? `${account.substring(0, 5)}...${account.substring(38)}`
                    : "CONNECT"}
                </button>
              </div>
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
