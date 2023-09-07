"use client";
import Image from "next/image";
import Data from "../json/data.json";
import Link from "next/link";

const page = () => {
  return (
    <section className="container-fluid gallery_section">
      <div className="container">
        <div className="row gy-3">
          <h1>
            frymates <span>gallery</span>
          </h1>
          {Data.map((x) => {
            return (
              <div className="col-md-4">
                <div className="wrapper">
                  <div className="img_container">
                    <Image
                      src={`./${x.img}`}
                      width={150}
                      height={0}
                      alt=""
                      className="img-fluid"
                    ></Image>
                  </div>
                  <div className="info">
                    <div className="title mb-3">
                      <span>{x.name}</span>
                    </div>
                    <span>0.06 ETH</span>
                    <Link
                      href={`${x.url}`}
                      target="_blank"
                      className="link_item"
                    >
                      <button>view</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="see_more">
            <Link href="https://opensea.io/collection/frymates" target="_blank">
              See more...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
