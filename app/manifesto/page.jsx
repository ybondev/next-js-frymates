"use client";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="container-fluid manifesto_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img_container">
              <Image
                src={"./assets/1.png"}
                width={500}
                height={0}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="desc">
              <h1>
                THE
                <span> MANIFESTO</span>
              </h1>
              <hr />
              <p>
                We’ve been burned more than 10x in crypto trading.
                <br />
                <br />
                Lost lots of $$$$$$s and more.
                <br />
                <br />
                We don’t want it to happen again.
                <br />
                <br />
                Not to us, nor you.
                <br />
                <br />
                Thus, we studied blockchain development and hired blockchain
                analysts.
                <br />
                <br />
                This time around, degen is not a word you could use against us
                when it comes to trade.
              </p>
            </div>
            <div className="btn_read">
              <Link href="" className="link_read">
                read our <span>whitepaper</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
