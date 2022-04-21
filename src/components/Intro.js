import React from "react";
import hero from "..//assets/Web Graphic1.webp";
import "./Nav.css";

const Intro = () => {
  return (
    <div id="landing">
      <div className="parent1" style={{ borderStyle: "none" }} id="home">
        <div className="child2 mt-lg-5 pt-lg-5">
          <div className="heading">
            <h1
              id="heading"
              style={{
                background: "white",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Making Commerce more Transparent through the Power of Blockchain
            </h1>
            <div className="my-md-5 my-lg-0 pt-3">
              <h5
                className="mx-xs-5"
                style={{ color: "white", marginTop: "1%", fontWeight: "400" }}
                id="h41"
              >
                At Autify Network, we are developing a blockchain trust protocol
                for the global supply chain and retail industry. It facilitates
                efficient transfer of information for Web 3.0.{" "}
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
          <img
            src={hero}
            className="img-fluid img1"
            alt="alt"
            style={{ width: "100%", zIndex: "0" }}
            id="img1"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
