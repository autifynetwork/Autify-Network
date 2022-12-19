import React from "react";
import hero from "../public/assets/Web Graphic1.webp";
import Typewriter from "typewriter-effect";
// import image from "../assets/08-scaled-e1614740007997.webp";
import image from "../public/assets/08-scaled-e1614740007997.webp";
import Image from "next/image";

const Intro = () => {
  return (
    <>
      <Image src={image} alt="banner" className="banner-image" priority />
      <div id="landing">
        <div className="parent1" style={{ borderStyle: "none" }} id="home">
          <div className="child2 mt-lg-5 pt-lg-5">
            <div className="heading">
              <h1
                className="pb-1"
                id="heading"
                style={{
                  background: "white",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Making Commerce more Transparent through the Power of{" "}
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    cursorClassName: "text-white",
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Blockchain")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("AI")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Computer Vision")
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </h1>
              <div className="my-md-5 my-lg-0 pt-3">
                <h5
                  className="mx-xs-5"
                  style={{ color: "white", marginTop: "1%", fontWeight: "400" }}
                  id="h41"
                >
                  Autify will become the universal symbol of truth for consumers
                  and brands. We are developing a trust protocol for the global
                  supply chain, commerce, insurance & cross-border payment.{" "}
                  <br className="break-phone" />
                </h5>
              </div>{" "}
            </div>
            <div className="mt-3 mb-lg-5">
              <button className="btn-grad py-3 mx-xs-5 mr-sm-auto">
                <a
                  href="https://twitter.com/autifynetwork"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "500" }}
                >
                  Join Us on Our Mission
                </a>
              </button>
            </div>
          </div>
          <div className="child1" id="child">
            <Image
              src={hero}
              className="img-fluid img1"
              alt="alt"
              style={{ width: "100%", zIndex: "0" }}
              id="img1"
              priority
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
