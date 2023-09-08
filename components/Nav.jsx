"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { SiOpensea } from "react-icons/si";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { toast } from "react-hot-toast";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [pathname, setPathName] = useState(false);
  const address = useAddress();
  const connectMetamask = useMetamask();

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

  useEffect(() => {
    setInterval(() => {
      CHECK_PATH();
    }, 1);
  }, [pathname]);

  return (
    <div
      className={pathname === true ? "navbar_bg" : "container-fluid nav_fluid"}
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
            <div className="social_icons">
              <Link href={""} className="link_social">
                <FaDiscord className="fa_icon" />
              </Link>
              <Link href={""} className="link_social">
                <SiOpensea className="fa_icon" />
              </Link>
              <Link href={""} className="link_social">
                <FaXTwitter className="fa_icon" />
              </Link>
            </div>
            {address === undefined ? (
              <Link
                href=""
                className="nav_link_connect"
                onClick={() =>
                  connectMetamask().catch((e) => {
                    toast.error("User rejected request.");
                  })
                }
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
                    CONNECT
                  </button>
                </div>
              </Link>
            ) : (
              <Link
                href=""
                className="nav_link_connect"
                onClick={() => connectMetamask()}
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
                    {address && address > 0
                      ? `${address.substring(0, 5)}...${address.substring(38)}`
                      : ""}
                  </button>
                </div>
              </Link>
            )}
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
