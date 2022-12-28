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
    twitter: "https://twitter.com/Its_Nabarun",
    linkedIn: "https://www.linkedin.com/in/nabarunchakrabortty/",
  },
  {
    name: "Deepak Komma",
    position: "Tech Lead",
    id: 2,
    photo: team17,
    twitter: "https://twitter.com/0xdeepak_eth",
    linkedIn: "https://www.linkedin.com/in/deepak-codes/",
  },
  {
    name: "Pankaj Arya",
    position: "Supply Chain Lead",
    id: 3,
    photo: team19,
    twitter: "https://twitter.com/Pnkj1985",
    linkedIn: "https://www.linkedin.com/in/pankajarya48",
  },
  {
    name: "Joel Dsouza",
    position: "Operations and Growth Lead",
    id: 4,
    photo: team15,
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/joel-d-souza-860a2916b/",
  },
  {
    name: "Anandita Biswas",
    position: "HR Manager",
    id: 5,
    photo: team18,
    twitter: "https://twitter.com/AnanditaBiswas9",
    linkedIn: "https://www.linkedin.com/in/anandita-biswas-363156176",
  },
  {
    name: "Soumitra Sen",
    position: "Social Media Manager & Content Lead",
    id: 6,
    photo: team12,
    twitter: "https://twitter.com/soumitrasen5",
    linkedIn:
      "https://www.linkedin.com/in/soumitra-sen-blockchain-content-writer-44a44b166/",
  },
  {
    name: "Shreejata Neogi",
    position: "Graphics & video lead",
    id: 7,
    photo: team5,
    twitter: "https://twitter.com/ShreejataNeogi",
    linkedIn: "https://www.linkedin.com/in/shreejata-neogi-0b37b1165/",
  },
  {
    name: "Parth Parolekar",
    position: "Frontend Developer",
    id: 8,
    photo: team20,
    twitter: "https://twitter.com/ParolekarParth",
    linkedIn: "https://www.linkedin.com/in/parth-parolekar-b7439a195",
  },
];

const advisorsDB = [
  {
    name: "Vijay Pravin",
    position: "Founder & CEO BitsCrunch",
    id: 1,
    photo: VijayPravin,
    twitter: "https://twitter.com/VijayPravinM",
    linkedIn: "https://de.linkedin.com/in/vijaypravin",
  },
  {
    name: "Keyur Shah",
    position: "Ex-CFO Polygon",
    id: 2,
    photo: KeyurShah,
    twitter: "https://twitter.com/keyur12392",
    linkedIn: "https://in.linkedin.com/in/keyur-shah-551b31b3",
  },
  {
    name: "Maz Zaman",
    position: "CEO Loop Ventures",
    id: 3,
    photo: MazZaman,
    twitter: "https://twitter.com/maz_zaman",
    linkedIn: "https://au.linkedin.com/in/maz-zaman",
  },
  {
    name: "Ajeet Khurana",
    position: "Founder Reflexical",
    id: 4,
    photo: AjeetKhurana,
    twitter: "https://twitter.com/AjeetK",
    linkedIn: "https://in.linkedin.com/in/ajeetkhurana",
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
        <h2 className="title mt-5 mb-3 pt-5 mb-3" id="h22">
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

      <div className="section text-center mx-lg-5 px-lg-5 px-2 mb-lg-5 pb-lg-5">
        <h2 className="title mt-5 mb-3 pt-5 mb-3" id="h22">
          {" "}
          <strong style={{ color: "white" }}> Advisors</strong>
        </h2>

        <div className="row">
          <div className="col team-container">
            {advisorsDB.map((teamMember) => (
              <TeamCard member={teamMember} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
