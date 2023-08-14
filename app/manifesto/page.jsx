"use client";
import Link from "next/link";

const page = () => {
  return (
    <section className="container-fluid manifesto_section">
      <div className="container">
        <div className="row">
          <h1>
            THE MANIFESTO <span>//</span>
          </h1>
          <hr />
          <div className="col-md-12">
            <div className="desc">
              <p>
                We’ve been burned more than 10x in crypto trading.
                <br />
                <br />
                Lost lots of $$$$$$s and more.
                <br />
                <br />
                We don’t want it to happen again. Not to us, nor you.
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
                read our whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
