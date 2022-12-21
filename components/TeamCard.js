import React from "react";

import twitterLogo from "../public/assets/twitterLogo.png";
import linkedinLogo from "../public/assets/linkedinLogo.png";
import Image from "next/image";

const TeamCard = ({ member }) => {
  return (
    <div className="col ">
      <div className="team-player">
        <div className="card card-plain">
          <div className="row">
            <div className="col">
              <Image
                src={member.photo}
                alt="ThumbnailImage"
                className="img-raised rounded-circle mx-auto"
                id="team_img1"
              />
            </div>
          </div>
          <h4 className="card-title mt-4" id="h4">
            {member.name}
            <br />
            <small className="card-description text-muted"></small>
          </h4>
          <div className="card-body">
            <p className="card-description" style={{ color: "white" }}>
              {member.position}
            </p>
          </div>
          <div className="card-footer justify-content-center">
            <div className="landing__foot__icons" style={{ display: "block" }}>
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
  );
};

export default TeamCard;
