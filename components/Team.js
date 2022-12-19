/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import Image from "next/image";

import twitterLogo from "../public/assets/twitterLogo.png";
import linkedinLogo from "../public/assets/linkedinLogo.png";

import team1 from "../public/assets/Team Pictures web/Team New/Nabarun.jpg";

import team5 from "../public/assets/Team Pictures web/Team New/Shreejata Neogi1.png";

// import team12 from "../public/assets/Team Pictures web/Team New/Soumitra Sen 1.png";
import team12 from "../public/assets/Team Pictures web/Team New/Soumitra.jpg";

import team15 from "../public/assets/Team Pictures web/Team New/Joel Dsouza 1.png";

import team17 from "../public/assets/Team Pictures web/Team New/DeepakKomma.jpg";
import team18 from "../public/assets/Team Pictures web/Team New/AnanditaBiswas.jpg";
import team19 from "../public/assets/Team Pictures web/Team New/PankajArya.jpg";
import team20 from "../public/assets/Team Pictures web/Team New/ParthParolekar.jpg";

import VijayPravin from "../public/assets/Advisors/Vijay Pravin.jpg";
import AjeetKhurana from "../public/assets/Advisors/AjeetKhurana.jpg";
import KeyurShah from "../public/assets/Advisors/Keyur.jpg";
import MazZaman from "../public/assets/Advisors/MazZaman.jpg";

class Team extends Component {
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
    // scroll({
    //   behavior: "smooth",
    // });
  }
  handleNav = (direction) => {
    if (direction === "left") {
      return this.navRef ? (this.navRef.current.scrollLeft -= 900) : null;
    } else {
      return this.navRef ? (this.navRef.current.scrollLeft += 900) : null;
    }
  };

  render() {
    return (
      <section
        className="mb-5 mx-2 slider teams"
        style={{ backgroundColor: "transparent" }}
        id="team"
      >
        <div className="section text-center mx-lg-5 px-lg-5 px-2 mb-lg-5 pb-lg-5">
          <h2 className="title mt-5 mb-3 pt-5 mb-3" id="meet_the_team_h2">
            {" "}
            <strong style={{ color: "white" }}>
              {" "}
              The Team behind Autify Network
            </strong>
          </h2>
          <div className="mx-lg-5 px-lg-5 mx-3">
            {" "}
            <h4 className="py-3 mb-5 mx-lg-5" id="meet_the_team_h4">
              {" "}
              We are a team of entrepreneurs, blockchain engineers,
              cryptographers, operational and marketing experts eager to build
              real-world solutions.
            </h4>
          </div>
          <div className="row">
            <div className="hidden-xs col-md-1 col-xs-0 text-white my-auto hide_mob">
              <a
                className="carousel-control-prev"
                href="#carouselControls"
                role="button"
                data-slide="prev"
                onClick={() => this.handleNav("left")}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
            </div>
            <div
              className="col grid-content mx-lg-5 px-lg-6 flex-row flex-nowrap x-scroll-disabled card-group py-2 rounded"
              id="phone1"
              ref={this.navRef}
            >
              <div className="col ">
                <div className="team-player">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team1}
                          alt="ThumbnailImage"
                          className="img-raised rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Nabarun Chakraborty
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Founder & CEO
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          href="https://twitter.com/Its_Nabarun"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nabarunchakrabortty/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mr-auto ml-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team17}
                          alt="ThumbnailImage"
                          className="img-raised rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4
                      className="card-title mt-4"
                      id="h4"
                      style={{ marginTop: "30px" }}
                    >
                      Deepak Komma
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Tech Lead
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/0xdeepak_eth"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/deepak-codes/"
                        >
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mx-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team19}
                          alt="ThumbnailImage"
                          className="img-raised rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Pankaj Arya
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Supply Chain Lead
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/Pnkj1985"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/pankajarya48"
                        >
                          {" "}
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mr-auto ml-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team15}
                          alt="ThumbnailImage"
                          className="img-raised rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Joel Dsouza
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Operations and Growth Lead
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <Image
                          alt="twitter"
                          src={twitterLogo}
                          style={{ width: "24px" }}
                        ></Image>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/joel-d-souza-860a2916b/"
                        >
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mr-auto ml-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team18}
                          alt="ThumbnailImage"
                          className="img-raised rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Anandita Biswas
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        HR Manager
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/AnanditaBiswas9"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/anandita-biswas-363156176"
                        >
                          {" "}
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mx-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col mx-auto">
                        <Image
                          src={team12}
                          alt="ThumbnailImage"
                          className="img-raised  rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Soumitra Sen
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Social Media Manager & Content Lead
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/soumitrasen5"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/soumitra-sen-blockchain-content-writer-44a44b166/"
                        >
                          {" "}
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mx-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team5}
                          alt="ThumbnailImage"
                          className="img-raised rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Shreejata Neogi
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Graphics & video lead
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/ShreejataNeogi"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/shreejata-neogi-0b37b1165/"
                        >
                          {" "}
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="team-player mx-auto">
                  <div className="card card-plain">
                    <div className="row">
                      <div className="col">
                        <Image
                          src={team20}
                          alt="ThumbnailImage"
                          className="img-raised  rounded-circle mx-auto"
                          id="team_img1"
                        />
                      </div>
                    </div>
                    <h4 className="card-title mt-4" id="h4">
                      Parth Parolekar
                      <br />
                      <small className="card-description text-muted"></small>
                    </h4>
                    <div className="card-body">
                      <p
                        className="card-description"
                        style={{ color: "white" }}
                      >
                        Frontend Developer
                      </p>
                    </div>
                    <div className="card-footer justify-content-center">
                      <div
                        className="landing__foot__icons"
                        style={{ display: "block" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/ParolekarParth"
                        >
                          <Image
                            alt="twitter"
                            src={twitterLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/parth-parolekar-b7439a195"
                        >
                          {" "}
                          <Image
                            alt="linkedin"
                            src={linkedinLogo}
                            style={{ width: "24px" }}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-xs col-md-1 col-xs-0 text-white my-auto hide_mob">
              <a
                className="carousel-control-next"
                href="#carouselControls"
                role="button"
                data-slide="next"
                onClick={() => this.handleNav("right")}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          {/* <div className="mt-5 btn_toggler">
            <button
              onClick={() => this.handleNav("left")}
              id="btn_toggler"
              className="mx-2"
            >
              {" "}
            </button>
            <button
              onClick={() => this.handleNav("right")}
              id="btn_toggler"
              className="mx-2"
            >
              {" "}
            </button>
          </div> */}
        </div>
        <div>
          <h1
            className="text-center"
            id="h22"
            style={{ marginTop: "10rem", color: "white" }}
          >
            Advisors
          </h1>
          <div className="advisors">
            <div className="team-player mx-auto">
              <div className="card card-plain">
                <div className="row">
                  <div className="col">
                    <Image
                      src={VijayPravin}
                      alt="ThumbnailImage"
                      className="img-raised  rounded-circle mx-auto"
                      id="team_img1"
                    />
                  </div>
                </div>
                <h4 className="card-title mt-4" id="h4">
                  Vijay Pravin
                  <br />
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description" style={{ color: "white" }}>
                    Founder & CEO BitsCrunch
                  </p>
                </div>
                <div className="card-footer justify-content-center">
                  <div
                    className="landing__foot__icons"
                    style={{ display: "block" }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/VijayPravinM"
                    >
                      <Image
                        alt="twitter"
                        src={twitterLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://de.linkedin.com/in/vijaypravin"
                    >
                      {" "}
                      <Image
                        alt="linkedin"
                        src={linkedinLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col "> */}
            <div className="team-player mx-auto">
              <div className="card card-plain">
                <div className="row">
                  <div className="col">
                    <Image
                      src={KeyurShah}
                      alt="ThumbnailImage"
                      className="img-raised  rounded-circle mx-auto"
                      id="team_img1"
                    />
                  </div>
                </div>
                <h4 className="card-title mt-4" id="h4">
                  Keyur Shah
                  <br />
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description" style={{ color: "white" }}>
                    Ex-CFO Polygon
                  </p>
                </div>
                <div className="card-footer justify-content-center">
                  <div
                    className="landing__foot__icons"
                    style={{ display: "block" }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/keyur12392"
                    >
                      <Image
                        alt="twitter"
                        src={twitterLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://in.linkedin.com/in/keyur-shah-551b31b3"
                    >
                      {" "}
                      <Image
                        alt="linkedin"
                        src={linkedinLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div className="col "> */}
            <div className="team-player mx-auto">
              <div className="card card-plain">
                <div className="row">
                  <div className="col">
                    <Image
                      src={MazZaman}
                      alt="ThumbnailImage"
                      className="img-raised  rounded-circle mx-auto"
                      id="team_img1"
                    />
                  </div>
                </div>
                <h4 className="card-title mt-4" id="h4">
                  Maz Zaman
                  <br />
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description" style={{ color: "white" }}>
                    CEO Loop Ventures
                  </p>
                </div>
                <div className="card-footer justify-content-center">
                  <div
                    className="landing__foot__icons"
                    style={{ display: "block" }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/maz_zaman"
                    >
                      <Image
                        alt="twitter"
                        src={twitterLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://au.linkedin.com/in/maz-zaman"
                    >
                      {" "}
                      <Image
                        alt="linkedin"
                        src={linkedinLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div className="col "> */}
            <div className="team-player mx-auto">
              <div className="card card-plain">
                <div className="row">
                  <div className="col">
                    <Image
                      src={AjeetKhurana}
                      alt="ThumbnailImage"
                      className="img-raised  rounded-circle mx-auto"
                      id="team_img1"
                    />
                  </div>
                </div>
                <h4 className="card-title mt-4" id="h4">
                  Ajeet Khurana
                  <br />
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description" style={{ color: "white" }}>
                    Founder Reflexical
                  </p>
                </div>
                <div className="card-footer justify-content-center">
                  <div
                    className="landing__foot__icons"
                    style={{ display: "block" }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/AjeetK"
                    >
                      <Image
                        alt="twitter"
                        src={twitterLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://in.linkedin.com/in/ajeetkhurana"
                    >
                      {" "}
                      <Image
                        alt="linkedin"
                        src={linkedinLogo}
                        style={{ width: "24px" }}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
