import React from "react";
import logo from "../public/assets/Content Pics/Logo/Logo 2.png";
// import { db } from "../firebase";
// import { useState } from "react";
import Image from "next/image";
import tele from "../public/assets/pngegg.png";
import twitterLogo from "../public/assets/twitterLogo.png";
import linkedinLogo from "../public/assets/linkedinLogo.png";
import facebookLogo from "../public/assets/facebookLogo.png";

import img1 from "../public/assets/Content Pics/AUTY Token/1.8.png";
import img2 from "../public/assets/Content Pics/AUTY Token/1.9.png";
import img3 from "../public/assets/Content Pics/AUTY Token/1.91.png";
import img4 from "../public/assets/Content Pics/AUTY Token/1.812.png";
import img5 from "../public/assets/Content Pics/AUTY Token/Pitch deckBG13.png";

// import near from "../public/assets/Content Pics/Partners/4.png";
import gs1 from "../public/assets/Content Pics/Partners/8.png";
import comp from "../public/assets/Content Pics/Partners/6.png";
import aws from "../public/assets/Content Pics/Partners/1.png";
// import dfinity from "../public/assets/Content Pics/Partners/5.png";
import ascent from "../public/assets/Content Pics/Partners/7.png";
import filecoin from "../public/assets/Content Pics/Partners/Filecoin.png";
import iba from "../public/assets/Content Pics/Partners/India blockchain accelerator.png";

import biconomy from "../public/assets/Investors/Biconomy.png";
import celo from "../public/assets/Investors/Celo.png";
import dfinity from "../public/assets/Investors/Dfinity.png";
import loop from "../public/assets/Investors/Loop ventures.png";
import near from "../public/assets/Investors/Near.png";
import zilhive from "../public/assets/Investors/Zilhive.png";

function Footer() {
  return (
    <>
      <section className="container mx-auto">
        <div className="partners_autify" style={{ color: "white" }}>
          <h1
            className="my-3 text-center"
            id="h22"
            style={{ marginTop: "2%", color: "white" }}
          >
            Partners
          </h1>
          {/* <div className="partners_grid mx-auto mb-lg-5 pb-lg-5 flex-row flex-nowrap overflow-auto x-scroll-disabled row-xs-12"> */}
          <div className="partners_grid">
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={near} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={loop} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={filecoin} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={dfinity} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={celo} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={biconomy} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={ascent} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={iba} className="partner_img" />
            </div>

            <div className="mt-5 mx-auto">
              <Image alt="Image" src={zilhive} className="partner_img" />
            </div>
            {/* <div className="mt-5 mx-auto">
              <Image alt="Image" src={iba} className="partner_img" />
            </div> */}
            {/* <div className="mt-5 mx-auto">
              <Image alt="Image" src={near} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={aws} className="partner_img" />
            </div> */}
            {/* <div className="mt-5 mx-auto partner_img_container">
              <Image alt="Image" src={gs1} className="partner_img mr-xs-4" />
            </div> */}
            {/* <div className="mt-5 mx-auto">
              <Image alt="Image" src={comp} className="partner_img" />
            </div>
            <div className="mt-5 mx-auto">
              <Image alt="Image" src={dfinity} className="partner_img" />
            </div> */}
          </div>
        </div>
        <div className="auty_token" style={{ color: "white" }}>
          <h1
            className="my-3 text-center"
            id="h22"
            style={{ marginTop: "2%", color: "white" }}
          >
            Token Utility
          </h1>
          <div className="auty_token_grid">
            <div className="auty_item text-center col my-3 mx-auto">
              <Image
                alt="Image"
                src={img1}
                className="auty_img"
                id="neu_img"
              ></Image>
              <h2 id="auty_title">Fees</h2>
              <p id="auty_description">
                Every on-chain transaction takes fees using AUTY tokens.
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <Image
                alt="Image"
                src={img5}
                className="auty_img"
                id="neu_img"
              ></Image>
              <h2 id="auty_title">Data Provider</h2>
              <p id="auty_description">
                Data provider/validator will use AUTY tokens to increase
                participation.
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <Image
                alt="Image"
                src={img4}
                className="auty_img"
                id="neu_img"
              ></Image>
              <h2 id="auty_title">Reward</h2>
              <p id="auty_description">
                Brands will use AUTY Tokens to process rewards to the end
                consumers.
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <Image
                alt="Image"
                src={img3}
                className="auty_img"
                id="neu_img"
              ></Image>
              <h2 id="auty_title">Staking</h2>
              <p id="auty_description">
                AUTY token holders can earn rewards by staking their tokens.
                {/* AUTY token holders can stake AUTY tokens on DApp as well as
                network. By doing so, the staker can earn AUTY tokens. */}
              </p>
            </div>
            <div className="auty_item text-center col my-3 mx-auto">
              <Image
                alt="Image"
                src={img2}
                className="auty_img"
                id="neu_img"
              ></Image>
              <h2 id="auty_title">Governance</h2>
              <p id="auty_description">
                AUTY Token is used for facilitating the governance activities
                such as Voting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="footer_m" id="footer_m">
        <a href=" ">
          <Image src={logo} alt="alt-text"></Image>
        </a>

        <div className="row text-center">
          <div className="col">
            <a href=" " className="button11 current">
              Privacy Policy
            </a>
          </div>
          <div className="col" style={{ placeItems: "center" }}>
            <a href=" " className="button11 current">
              Terms and Conditions
            </a>
          </div>
          <div className="col" style={{ placeItems: "center" }}>
            <a href="/contact" className="button11 current">
              Contact Us
            </a>
          </div>
          {/* <div className="col">
            <a href=" " className="button11">
              Sitemap
            </a>
          </div> */}
        </div>
        <div className="landing__foot__icons" style={{ display: "block" }}>
          <a
            href="https://twitter.com/autifynetwork"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <Image
              src={twitterLogo}
              style={{ width: "20px", height: "auto" }}
              alt="twitter"
              id="icons"
            ></Image>
          </a>
          <a
            href="https://www.linkedin.com/company/autify-network/"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <Image
              src={linkedinLogo}
              style={{ width: "20px", height: "auto" }}
              alt="linkedin"
              id="icons"
            ></Image>
          </a>
          <a
            href="https://www.facebook.com/autifynetwork"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <Image
              src={facebookLogo}
              style={{ width: "20px", height: "auto" }}
              alt="facebook"
              is="icons"
            ></Image>
          </a>
          <a
            href="https://t.me/autifynetwork"
            target="_blank"
            rel="noreferrer"
            className="mx-1 "
          >
            <Image
              src={tele}
              style={{ width: "20px", height: "auto" }}
              alt="telegram"
              className="img-fluid"
              id="icons"
            ></Image>
          </a>
        </div>
        <br />
        <div
          className="row mx-auto .d-flex"
          style={{ placeItems: "center", marginRight: "40%" }}
        >
          <a href="#0" className="button11 current">
            <i className="mdi mdi-copyright"></i>2022 Autify Network. All Rights
            Reserved.
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
