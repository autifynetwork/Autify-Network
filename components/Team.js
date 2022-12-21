/* eslint-disable no-restricted-globals */
import React, { Component, useState } from "react";
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
import TeamCard from "./TeamCard";

const teamDB = [
  {
    name: "Nabarun Chakraborty",
    position: "Founder & CEO",
    id: 1,
    photo: team1,
  },
  {
    name: "Deepak Komma",
    position: "Tech Lead",
    id: 2,
    photo: team17,
  },
  {
    name: "Pankaj Arya",
    position: "Supply Chain Lead",
    id: 3,
    photo: team19,
  },
  {
    name: "Joel Dsouza",
    position: "Operations and Growth Lead",
    id: 4,
    photo: team15,
  },
  {
    name: "Anandita Biswas",
    position: "HR Manager",
    id: 5,
    photo: team18,
  },
  {
    name: "Soumitra Sen",
    position: "Social Media Manager & Content Lead",
    id: 6,
    photo: team12,
  },
  {
    name: "Shreejata Neogi",
    position: "Graphics & video lead",
    id: 7,
    photo: team5,
  },
  {
    name: "Parth Parolekar",
    position: "Frontend Developer",
    id: 8,
    photo: team20,
  },
];

const Team = () => {
  const showMembersDefault = 4;
  const [showMembers, setShowMembers] = useState(showMembersDefault);

  const handleTeamMembers = () => {
    if (showMembers === showMembersDefault) {
      setShowMembers(teamDB.length);
    } else {
      setShowMembers(showMembersDefault);
    }
  };
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
          <div className="col team-container">
            {teamDB.map((teamMember) =>
              showMembers >= teamMember.id ? (
                <TeamCard member={teamMember} />
              ) : null
            )}
          </div>
        </div>
        <button className="btn-grad mx-auto mt-5" onClick={handleTeamMembers}>
          {showMembers === showMembersDefault ? "More" : "Less"}
        </button>
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
};

export default Team;
