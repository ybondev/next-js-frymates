"use client";

import Image from "next/image";

const page = () => {
  return (
    <section className="container-fluid roadmap_section">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-12">
            <div className="desc">
              <h1>
                frymates <span>roadmap</span>
              </h1>
              <p>
                Welcome to Wack Go Land! A place where degens like you and I get
                guided with data-driven insights on crypto markets.
                <br />
                <br />
                After you mint a Frymate, a unique and programmatically
                generated NFT stored in ERC-721A tokens in Ethereum blockchain,
                you'll get holders-only access to some analytics tools Wack Go
                Land developers are creating.
                <br />
                <br />
                We're here to un-degen our trading.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card_container">
              <Image
                src="./assets/3.png"
                width={1000}
                height={1000}
                className="img-fluid"
              ></Image>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row gy-3">
              <div className="col-md-6">
                <div className="card_text">
                  <p>
                    MINTING OPEN. Be here for the long haul. A collection of
                    10,000 rare Frymates are launched to the world. 0.08 per
                    mint.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card_text">
                  <p>
                    SNAP! Rewarding early adopters. First 50 minters get
                    additional 2 Frymates each. Minters 51-100 will get 1
                    Frymates each. Remaining 50 Frymates will get raffled to all
                    minters. Three lucky minters gets 1% (8 ETH) of total mint
                    revenue. 🤯
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card_text">
                  <p>
                    EXCLUSIVE ACCESS. Once all 10,000 Frymates get minted, we'll
                    open a holders-only discord where they could access industry
                    insights and ping our apprentice blockchain detectives about
                    projects they are eyeing.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card_text">
                  <p>
                    DATA FOR YOUR EYES ONLY. Unveiling our holders-only data
                    analytics website. With a few clicks and seconds, we could
                    know if a crypto trade is a degen or moon (Q4 2022)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
