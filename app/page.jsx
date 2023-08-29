"use client";
import Link from "next/link";

const Home = () => {
  return (
    <section className="container-fluid home_section">
      <div className="video_container">
        <video
          src="./assets/frymates.mp4"
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
            <div className="desc">
              <h1>
                Un-degen your trading.
                <br />
                Make data-driven decisions.
              </h1>
              <p>
                Get exclusive access to data-analytics tool and internal
                resources <br /> for a better, safer web3 trading.
              </p>
              <div className="btn_container">
                <Link href="/mint" className="link_mint">
                  <button>mint</button>
                </Link>
                <Link href="" className="link_explore">
                  <button>explore</button>
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
