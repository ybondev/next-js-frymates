"use client";
import Link from "next/link";

const Home = () => {
  return (
    <section className="container-fluid home_section">
      <div className="video_container">
        <video
          src="./assets/Frymates NFT - Web3 Detective Agency.mp4"
          datatype="mp4"
          loop
          muted
          playsInline
          autoPlay
        ></video>
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="decs">
              <h1>
                Un-degen your trading.
                <br />
                Make data-driven decisions.
              </h1>
              <div className="btn_container">
                <Link href="" className="link_mint">
                  public mint open
                </Link>
                <Link href="" className="link_explore">
                  explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
