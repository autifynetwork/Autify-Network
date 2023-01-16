/* eslint-disable no-restricted-globals */
import React, { Component, useState } from "react";
import Image from "next/image";

import twitterLogo from "../public/assets/twitterLogo.png";
import linkedinLogo from "../public/assets/linkedinLogo.png";

import Nabarun from "../public/assets/Team Pictures web/Team New/Nabarun.jpg";
import Shreejata from "../public/assets/Team Pictures web/Team New/Shreejata Neogi1.png";
import Soumitra from "../public/assets/Team Pictures web/Team New/Soumitra.jpg";
import Joel from "../public/assets/Team Pictures web/Team New/Joel Dsouza 1.png";
import Deepak from "../public/assets/Team Pictures web/Team New/DeepakKomma.jpg";
import Anandita from "../public/assets/Team Pictures web/Team New/AnanditaBiswas.jpg";
import Pankaj from "../public/assets/Team Pictures web/Team New/PankajArya.jpg";
import Parth from "../public/assets/Team Pictures web/Team New/ParthParolekar.jpg";
import Shalini from "../public/assets/Team Pictures web/Team New/Shalini.jpg";
import Supriyo from "../public/assets/Team Pictures web/Team New/Supriyo2.jpg";
import Venkatesh from "../public/assets/Team Pictures web/Team New/Venkatesh.jpg";

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
    photo: Nabarun,
    twitter: "https://twitter.com/Its_Nabarun",
    linkedIn: "https://www.linkedin.com/in/nabarunchakrabortty/",
  },
  {
    name: "Pankaj Arya",
    position: "Supply Chain Lead",
    id: 2,
    photo: Pankaj,
    twitter: "https://twitter.com/Pnkj1985",
    linkedIn: "https://www.linkedin.com/in/pankajarya48",
  },
  {
    name: "Deepak Komma",
    position: "Lead Engineer",
    id: 3,
    photo: Deepak,
    twitter: "https://twitter.com/0xdeepak_eth",
    linkedIn: "https://www.linkedin.com/in/deepak-codes/",
  },
  {
    name: "Venkatesh Prasad",
    position: "UI/UX Developer",
    id: 4,
    photo: Venkatesh,
    twitter: "https://twitter.com/venkatesh1662",
    linkedIn: "https://in.linkedin.com/in/venkatesh-prasad-g",
  },
  {
    name: "Supriyo Sarkar",
    position: "Full Stack Developer",
    id: 5,
    photo: Supriyo,
    twitter: "https://twitter.com/Spantheslayer",
    linkedIn: "https://www.linkedin.com/in/supriyosarkar/",
  },
  {
    name: "Parth Parolekar",
    position: "Frontend Developer",
    id: 6,
    photo: Parth,
    twitter: "https://twitter.com/ParolekarParth",
    linkedIn: "https://www.linkedin.com/in/parth-parolekar-b7439a195",
  },
  {
    name: "Shalini Raja",
    position: "Digital Marketing Manager",
    id: 7,
    photo: Shalini,
    twitter: "https://twitter.com/Shalini202203",
    linkedIn: "https://www.linkedin.com/in/shalini-raja-625391a7",
  },
  {
    name: "Soumitra Sen",
    position: "Social Media & Content Manager",
    id: 8,
    photo: Soumitra,
    twitter: "https://twitter.com/soumitrasen5",
    linkedIn:
      "https://www.linkedin.com/in/soumitra-sen-blockchain-content-writer-44a44b166/",
  },
  {
    name: "Shreejata Neogi",
    position: "Graphics & Video Manager",
    id: 9,
    photo: Shreejata,
    twitter: "https://twitter.com/ShreejataNeogi",
    linkedIn: "https://www.linkedin.com/in/shreejata-neogi-0b37b1165/",
  },
  {
    name: "Anandita Biswas",
    position: "HR Manager",
    id: 10,
    photo: Anandita,
    twitter: "https://twitter.com/AnanditaBiswas9",
    linkedIn: "https://www.linkedin.com/in/anandita-biswas-363156176",
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
