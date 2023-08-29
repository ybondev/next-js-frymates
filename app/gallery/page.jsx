"use client";

import Image from "next/image";
import Data from "../json/data.json";

const page = () => {
  return (
    <section className="container-fluid gallery_section">
      <div className="container">
        <div className="row gy-3">
          <h1>
            frymates <span>gallery</span>
          </h1>
          <div className="col-md-12">
            <div className="search_container">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name or trait..."
              />
            </div>
          </div>
          {Data.map((x) => {
            return (
              <div className="col-md-4 col-6 col-lg-3" key={x.id}>
                <div className="img_container">
                  <Image
                    src={`./${x.img}`}
                    width={500}
                    height={0}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="img_title mt-3">
                  <span>{x.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
