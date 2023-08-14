"use client";

import Image from "next/image";

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
                placeholder="Search here..."
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="filter_container">filter</div>
          </div>
          <div className="col-md-3">
            <div className="img_container">
              <Image
                src="/assets/1.png"
                width={1000}
                height={1000}
                className="img-fluid"
              ></Image>
            </div>
            <div className="img_title">
              <h1>frymates #1</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="img_container">
              <Image
                src="/assets/4.png"
                width={1000}
                height={1000}
                className="img-fluid"
              ></Image>
            </div>
            <div className="img_title">
              <h1>frymates #2</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="img_container">
              <Image
                src="/assets/3.png"
                width={1000}
                height={1000}
                className="img-fluid"
              ></Image>
            </div>
            <div className="img_title">
              <h1>frymates #3</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
