import React from "react";
import "./Info.css";
import img1 from "..//assets/Poor Quality Product Market.webp";
import img2 from "..//assets/Damaging to Brand Identity.webp";
import img3 from "..//assets/Risk to Health _ Safety.webp";
import img4 from "..//assets/Costs Jobs and Revenue.webp";
import img5 from "..//assets/Instant Proof of Origin and Authenticity.webp";
import img6 from "..//assets/Independently Verifiable Digital Records.webp";
import img7 from "..//assets/Decentralized Tamper-proof System.webp";
import img8 from "../assets/Reliable Dependable Product Validation.webp";
import img9 from "..//assets/Distinct Product Identity.webp";
import img10 from "..//assets/Unique Authentication System.webp";
import img11 from "..//assets/Instant Clone Identification.webp";
import img12 from "..//assets/Permanent Data Ledger.webp";
import img13 from "..//assets/Pre-listing Product Authentication.png";
import img14 from "..//assets/Immutable Brand Information.png";
import img15 from "../assets/Trustworthy Customer Experience.png";
import img16 from "..//assets/Reduced Returns & Exchanges1.png";
import img17 from "..//assets/Pharmaceuticals.png";
import img19 from "..//assets/Lifestyle & Apparel.png";
import img18 from "../assets/Food & Beverage.png";
import img22 from "..//assets/Luxury & Jewelery.png";
import img20 from "..//assets/Wine & Spirits.png";
import img21 from "..//assets/Agriculture.png";
import img23 from "..//assets/Electrical Equipments1.png";
import img24 from "..//assets/Perfumes and Cosmetics.png";

import img25 from "../assets/Content Pics/The Future of Global Retail/Affects Brand Reputation.png";
import img26 from "../assets/Content Pics/The Future of Global Retail/Can’t ascertain authenticity.png";
import img27 from "../assets/Content Pics/The Future of Global Retail/No transparency in supply chain.png";
import img28 from "../assets/Content Pics/The Future of Global Retail/Risk to Health _ Safety.png";

import img29 from "../assets/Content Pics/Up your game with uncontested truth/Consumer interaction.png";
import img30 from "../assets/Content Pics/Up your game with uncontested truth/Product authenticity.png";
import img31 from "../assets/Content Pics/Up your game with uncontested truth/Product birth certificate.png";
import img32 from "../assets/Content Pics/Up your game with uncontested truth/Real-time item-level monitoring.png";

import img33 from "../assets/Content Pics/Smart contract based parametric insurance/Extensive data analysis.png";
import img34 from "../assets/Content Pics/Smart contract based parametric insurance/Automated payment of claims.png";
import img35 from "../assets/Content Pics/Smart contract based parametric insurance/Reduced chance of disputes1.png";
import img36 from "../assets/Content Pics/Smart contract based parametric insurance/Comprehensive risk assessment.png";

import img37 from "../assets/Content Pics/Unleashing the power of decentralised finance/Access to micro loans.png";
import img38 from "../assets/Content Pics/Unleashing the power of decentralised finance/Community Liquidity Pooling.png";
import img39 from "../assets/Content Pics/Unleashing the power of decentralised finance/Operates in a permissionless manner1.png";
import img40 from "../assets/Content Pics/Unleashing the power of decentralised finance/Partner Network Lending.png";

import img41 from "../assets/Content Pics/Ensuring a secure E-commerce experience/Enhanced transparency.png";
import img42 from "../assets/Content Pics/Ensuring a secure E-commerce experience/Proof of ownership and authenticity.png";
import img43 from "../assets/Content Pics/Ensuring a secure E-commerce experience/Trustworthy customer experience.png";
import img44 from "../assets/Content Pics/Ensuring a secure E-commerce experience/Reduced Returns _ Exchanges.png";

import img45 from "../assets/Content Pics/Industries we are targeting/Lifestyle _ Apparel.png";
import img46 from "../assets/Content Pics/Industries we are targeting/Luxury _ Jewellery.png";
import img47 from "../assets/Content Pics/Industries we are targeting/Perfume and Cosmetics.png";
import img48 from "../assets/Content Pics/Industries we are targeting/Electrical Equipment.png";
import img49 from "../assets/Content Pics/Industries we are targeting/Wine and Spirits.png";
import img50 from "../assets/Content Pics/Industries we are targeting/Automotive.png";
import img51 from "../assets/Content Pics/Industries we are targeting/Pharma and Healthcare.png";

class Info extends React.Component {
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
  }
  handleNav = (direction) => {
    if (direction === "left") {
      return this.navRef ? (this.navRef.current.scrollLeft -= 1100) : null;
    } else if (direction === "right") {
      return this.navRef ? (this.navRef.current.scrollLeft += 1100) : null;
    }
  };

  render() {
    return (
      <>
        <div className="parent my-lg-3">
          <div className="container" id="problem">
            <div className="row">
              <div className="col my-auto">
                <div className="child2 my-auto mx-auto">
                  <div className="my-5 pt-5">
                    <h5 style={{ color: "white", fontWeight: "lighter" }}>
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        {" "}
                        A revolution for every industry
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto"
                      id="h22"
                      style={{
                        marginTop: "2%",
                        color: "white",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      The Future of Global Retail
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Undoubtedly, e-commerce has globalized the supply
                        distribution chain. People can order any product from
                        anywhere at anytime. Likewise, manufacturers have to
                        deal with high consumer demand. They are reducing their
                        operating costs by using low-quality raw materials and
                        following sub-standard manufacturing practices. This has
                        resulted in counterfeit goods and intellectual property
                        theft.
                      </span>
                    </h6>
                    <div className="my-5">
                      <a
                        className="button_info my-3"
                        href="#contact"
                        data-target="#contact"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-auto">
                <div className="child11 mt-lg-3 my-lg-0 py-lg-2">
                  <div className="container">
                    <div className="row flex-row flex-nowrap overflow-auto x-scroll-disabled">
                      <div className="grid-container mx-auto">
                        <div className="grid-item">
                          <div className="row mb-5 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img25}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3 "
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Affects Brand Reputation
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row mb-5 my-md-0 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img27}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Lack of transparency in Supply Chain
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto my-xs-0 my-md-0"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img26}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Tough to ascertain authenticity
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row mb-2 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img28}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Risk to Health & Safety
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col mx-auto my-auto">
                        <div className="row mb-lg-5 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img1}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Poor Quality Product Market
                            </h4>
                          </div>
                        </div>
                        <div className="row my-lg-3 my-xs-0 my-md-0 mx-auto"
                          id="ok"
                        >
                          <div className="row">
                            <img
                              src={img2}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Damaging to Brand Identity
                            </h4>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col px-auto py-lg-4">
                        <div
                          className="row mb-lg-5 mx-auto my-xs-0 my-md-0"
                          id="ok"
                        >
                          <div className="row">
                            <img
                              src={img3}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Risk to Health & Safety
                            </h4>
                          </div>
                        </div>
                        <div className="row my-3 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img4}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Costs Jobs and Revenue
                            </h4>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="container mb-lg-1" id="solution">
            <div className="row flex-column-reverse flex-lg-row mt-5">
              <div className="col my-auto">
                <div className="child11 mt-lg-1 pb-sm-0 mb-lg-0 pb-lg-2">
                  <div className="container">
                    <div className="row flex-row flex-nowrap overflow-auto x-scroll-disabled">
                      <div className="grid-container mx-auto">
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-xs-0 mt-3"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img30}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Product Authentication
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-xs-0 mt-3"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img29}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Consumer Interaction
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mt-3 my-lg-3 mx-auto"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img31}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Product Birth Certificate
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row  my-3 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img32}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Real-Time Item-Level Monitoring
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col mx-auto my-auto">
                        <div className="row mb-lg-5 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img5}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Instant Proof of Origin and Authenticity
                            </h4>
                          </div>
                        </div>
                        <div className="row my-lg-3 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img6}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Independently Verifiable Digital Records
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col px-auto py-lg-5">
                        <div className="row mb-lg-5 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img7}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Decentralized Tamper-proof System
                            </h4>
                          </div>
                        </div>
                        <div className="row my-3 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img8}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Reliable Dependable Product Validation
                            </h4>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-auto">
                <div className="child2 my-auto mx-auto">
                  <div className="my-5 pt-xs-5">
                    <h5 style={{ color: "white", fontWeight: "lighter" }}>
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        Autify Authenticate Block
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto"
                      id="h22"
                      style={{ marginTop: "2%", color: "white" }}
                    >
                      Up your game with uncontested truth
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Capture the full chain of custody along the supply chain
                        and get real-time insights into the flow of products.
                        Collect and share information about where and how your
                        products are made and what they are made of.
                      </span>
                    </h6>
                    <div className="my-5">
                      <a
                        href="#contact"
                        data-target="#contact"
                        className="button_info my-3"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent my-lg-3">
          <div className="container" id="problem">
            <div className="row">
              <div className="col my-auto">
                <div className="child2 my-auto mx-auto">
                  <div className="my-5 pt-5">
                    <h5 style={{ color: "white", fontWeight: "lighter" }}>
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        {" "}
                        Autify Insurance Block
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto"
                      id="h22"
                      style={{
                        marginTop: "2%",
                        color: "white",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      Smart contract based parametric insurance
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Traditional insurance firms can leverage the benefits of
                        blockchain technology by creating advanced smart
                        contract-based parametric insurance agreements that
                        automatically trigger payouts based on real-world data.
                      </span>
                    </h6>
                    <div className="my-5">
                      <a
                        className="button_info my-3"
                        href="#contact"
                        data-target="#contact"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="child11 my-lg-3 py-lg-2">
                  <div className="container">
                    <div className="row flex-row flex-nowrap overflow-auto x-scroll-disabled">
                      <div className="grid-container mx-auto">
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-xs-0 mt-3"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img33}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Extensive Data Analysis
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-xs-0 mt-3"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img34}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Automated Payment of Claims
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mt-3 my-lg-3 mx-auto"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img35}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Reduced Chance of Disputes
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row  my-3 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img36}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Comprehensive Risk Assessment
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="container mb-lg-1" id="solution">
            <div className="row flex-column-reverse flex-lg-row mt-5">
              <div className="col my-auto">
                <div className="child11 mt-lg-1 pb-sm-0 mb-lg-0 pb-lg-2">
                  <div className="container">
                    <div className="row flex-row flex-nowrap overflow-auto x-scroll-disabled">
                      <div className="grid-container mx-auto">
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-xs-0 mt-3"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img40}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Partner Network Lending
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-xs-0 mt-3"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img39}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Operates in a Permissionless Manner
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mt-3 my-lg-3 mx-auto"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img38}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Common Liquidity Pooling
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row  my-3 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img37}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Access to Micro Loans
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-auto">
                <div className="child2 my-auto mx-auto">
                  <div className="my-5 pt-xs-5">
                    <h5 style={{ color: "white", fontWeight: "lighter" }}>
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        Autify DeFi Block
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto"
                      id="h22"
                      style={{ marginTop: "2%", color: "white" }}
                    >
                      Unleashing the power of decentralised finance
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Autify DeFi is an ecosystem of purpose-driven lenders
                        who offer microfinance opportunities to disenfranchised
                        supply chain participants. The ecosystem leverages an
                        algorithmic and autonomous interest rate protocol
                        combined with SMS and WhatsApp. Hence, participants get
                        access to open-source financial applications.
                      </span>
                    </h6>
                    <div className="my-5">
                      <a
                        href="#contact"
                        data-target="#contact"
                        className="button_info my-3"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent mb-5 pb-5">
          <div className="container">
            <div className="row" id="eCommerce">
              <div className="col my-auto">
                <div className="child2 my-auto mx-auto">
                  <div className="my-2 pt-5">
                    <h5 style={{ color: "white", fontWeight: "lighter" }}>
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        Safer online shopping
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto"
                      id="h22"
                      style={{
                        marginTop: "2%",
                        color: "white",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      Ensuring a secure <br /> E-commerce experience
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Our world-class blockchain solution removes
                        counterfeiters. Besides that, it ensures transparency
                        and trust between brands and consumers dealing via
                        e-commerce platforms. Brand reputation is ensured
                        through efficient data analysis, effective inventory
                        management, and seamless supply chain traceability.
                        Hence, consumers are guaranteed that the branded
                        products are authentic.
                      </span>
                    </h6>
                    <div className="my-5">
                      <a
                        className="button_info my-3"
                        href="#contact"
                        data-target="#contact"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-auto">
                <div className="child11 my-lg-3 py-lg-3">
                  <div className="container">
                    <div className="row flex-row flex-nowrap overflow-auto x-scroll-disabled">
                      <div className="grid-container mx-auto">
                        <div className="grid-item">
                          <div
                            className="row mb-5 mt-xs-0 mt-3 mx-auto"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img41}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Enhanced Transparency
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row mb-5 mx-auto mt-3 mt-xs-0"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img42}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Proof of Ownership and Authenticity
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="row my-lg-3 mt-3 mb-5 mx-auto"
                            id="ok"
                          >
                            <div className="row">
                              <img
                                src={img43}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Trustworthy Customer Experience
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row my-3 mb-5 mx-auto" id="ok">
                            <div className="row">
                              <img
                                src={img44}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></img>
                            </div>
                            <div
                              className="row mx-3"
                              style={{
                                color: "white",
                                alignSelf: "center",
                                alignItems: "center",
                              }}
                            >
                              <h4 className="mx-auto my-3 card-font">
                                Reduced Returns & Exchanges
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col mx-auto my-auto">
                        <div className="row mb-lg-5 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img13}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Pre-listing Product Authentication
                            </h4>
                          </div>
                        </div>
                        <div
                          className="row my-lg-3 my-xs-0 my-md-0 mx-auto"
                          id="ok"
                        >
                          <div className="row">
                            <img
                              src={img14}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Immutable Brand Information
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col px-auto py-lg-5">
                        <div
                          className="row mb-lg-5 mx-auto my-xs-0 my-md-0"
                          id="ok"
                        >
                          <div className="row">
                            <img
                              src={img15}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Trustworthy Customer Experience
                            </h4>
                          </div>
                        </div>
                        <div className="row my-3 mx-auto" id="ok">
                          <div className="row">
                            <img
                              src={img16}
                              alt="alt"
                              className="mx-auto img-fluid"
                              style={{ width: "120px" }}
                              id="neu_img"
                            ></img>
                          </div>
                          <div
                            className="row mx-3"
                            style={{
                              color: "white",
                              alignSelf: "center",
                              alignItems: "center",
                            }}
                          >
                            <h4 className="mx-auto my-3">
                              Reduced Returns & Exchanges
                            </h4>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mb-5 pb-5 mb-lg-4 pb-lg-1 pt-lg-0 mt-xs-5 pt-xs-5">
          <h5 style={{ color: "#a25edc", fontWeight: "normal" }}>
            Creating a digital identity
          </h5>

          <h1
            className="my-3 mr-auto"
            id="h22"
            style={{ marginTop: "2%", color: "white" }}
          >
            What We Offer
          </h1>
          <div
            className="grid-content mb-lg-5 pb-lg-5 flex-row flex-nowrap overflow-auto x-scroll-disabled row-xs-12"
            id="phone3"
          >
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <div className="row mx-auto" id="offer_card">
                <img
                  src={img9}
                  alt="alt"
                  className="mx-auto img-fluid"
                  style={{ width: "140px" }}
                  id="neu_img"
                ></img>
              </div>
              <div
                className="row mx-3"
                style={{
                  color: "white",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <h4 className="mx-auto my-3" style={{ textAlign: "center" }}>
                  Distinct Product Identity
                </h4>
                <p
                  className="my-lg-4"
                  id="ptag"
                  style={{ textAlign: "center" }}
                >
                  Partner brands are able to tag their products with a secure
                  permanently linked mark.
                </p>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <div className="row mx-auto" id="offer_card">
                <img
                  src={img10}
                  alt="alt"
                  className="mx-auto img-fluid"
                  style={{ width: "140px" }}
                  id="neu_img"
                ></img>
              </div>
              <div
                className="row mx-3"
                style={{
                  color: "white",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <h4 className="mx-auto my-3" style={{ textAlign: "center" }}>
                  Unique Authentication System
                </h4>
                <p style={{ textAlign: "center" }} className="my-lg-4">
                  {" "}
                  We make use of artificial intelligence, image recognition,
                  bio-inspired technology and blockchain novelty.{" "}
                </p>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
              id="offer_card"
            >
              <div className="row" id="offer_card">
                <img
                  src={img11}
                  alt="alt"
                  className="img-fluid mx-auto"
                  style={{ width: "140px" }}
                  id="neu_img"
                ></img>
              </div>
              <div
                className="row mx-3"
                style={{
                  color: "white",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <h4 className="mx-auto my-3" style={{ textAlign: "center" }}>
                  Instant Clone Identification
                </h4>{" "}
                <p className="my-lg-4" style={{ textAlign: "center" }}>
                  Slightest anomaly in the scanning process marks the product as
                  inauthentic.
                </p>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <div className="row mx-auto" id="offer_card">
                <img
                  src={img12}
                  alt="alt"
                  className="mx-auto img-fluid"
                  style={{ width: "140px" }}
                  id="neu_img"
                ></img>
              </div>
              <div
                className="row mx-3"
                style={{
                  color: "white",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <h4 className="mx-auto my-3" style={{ textAlign: "center" }}>
                  Permanent Data Ledger
                </h4>
                <p className="my-lg-4" style={{ textAlign: "center" }}>
                  All data pertaining to the product can be accessed at anytime
                  and cannot be altered or destroyed
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container mb-lg-3 pb-lg-3 pt-lg-0 pt-xs-5">
          <h5 style={{ color: "#a25edc", fontWeight: "normal" }}> </h5>
          <h5 style={{ color: "white", fontWeight: "lighter" }}>
            <span style={{ color: "#a25edc", fontWeight: "normal" }}>
              Comprehensive solution for brands
            </span>
          </h5>
          <h2
            className="mt-3 mr-auto"
            id="h22"
            style={{ marginTop: "2%", color: "white" }}
          >
            Industries we are targeting
          </h2>
          <div
            className="grid-ind-content mb-lg-5 pb-lg-5 flex-row flex-nowrap overflow-auto x-scroll-disabled row-xs-12"
            id="phone"
            ref={this.navRef}
          >
            <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img45}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Apparel & Footwear</h4>
            </div>
            <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img46}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Luxury and Jewellery</h4>
            </div>
            <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img47}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Perfume and Cosmetics</h4>
            </div>
            {/* <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img48}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Electrical Equipment</h4>
            </div> */}
            <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img49}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Wine and Spirits</h4>
            </div>
            <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img50}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Automotive</h4>
            </div>
            <div
              className="col my-3 mx-auto offer_card"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <img
                src={img51}
                alt="alt"
                className="img-fluid rounded-img ind_target"
                id="neu_img"
              ></img>
              <h4 style={{ color: "white" }}>Pharma and Healthcare</h4>
            </div>
            {/* <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
              id="offer_card"
            >
              <div
                className="row mx-auto"
                id="offer_card"
                style={{ width: "245px" }}
              >
                <img
                  src={img19}
                  alt="alt"
                  className="img-fluid rounded-img"
                  id="neu_img"
                ></img>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
              id="offer_card"
            >
              <div
                className="row mx-auto"
                id="offer_card"
                style={{ width: "245px" }}
              >
                <img
                  src={img23}
                  alt="alt"
                  className="img-fluid rounded-img"
                  id="neu_img"
                ></img>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
              id="offer_card"
            >
              <div
                className="row mx-auto"
                id="offer_card"
                style={{ width: "245px" }}
              >
                <img
                  src={img24}
                  alt="alt"
                  className="img-fluid rounded-img"
                  id="neu_img"
                ></img>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <div
                className="row mx-auto"
                id="offer_card"
                style={{ width: "245px" }}
              >
                <img
                  src={img22}
                  alt="alt"
                  className="img-fluid rounded-img"
                  id="neu_img"
                ></img>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <div
                className="row mx-auto"
                id="offer_card"
                style={{ width: "245px" }}
              >
                <img
                  src={img20}
                  alt="alt"
                  className="img-fluid rounded-img"
                  id="neu_img"
                ></img>
              </div>
            </div>
            <div
              className="col my-3 mx-auto"
              style={{ placeContent: "center", placeItems: "center" }}
            >
              <div
                className="row mx-auto"
                id="offer_card"
                style={{ width: "245px" }}
              >
                <img
                  src={img17}
                  alt="alt"
                  className="img-fluid rounded-img"
                  id="neu_img"
                ></img>
              </div>
            </div> */}
          </div>
          <div
            className="mt-5 mx-auto"
            id="button_toggler"
            style={{ paddingLeft: "30vw" }}
          >
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
          </div>
        </div>

        {/* 
            <section>
              <div className="container">
                <div className="row">
                  <div className="row"><h2>Steps to our world</h2></div>
                  <div className="col">

                  </div>
                  <div className="col">
                    
                    </div>
                    <div className="col">
                    
                    </div>
                    <div className="col  my-x-3">
                    
                    </div>
                </div>
              </div>
            </section> */}

        <section>
          {/* <div className="container" id="section2">
                    <div className="row" style={{height:"20vh"}}></div>

                    <div className="row">
            <div className="parent my-3" id="parent1">
            <div className="child1 my-lg-5 py-lg-5">
                <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/illustration-2-e1614311211637.png" alt="alt" className="img-fluid" id="img_trusted"></img>
          
                 
        
               
            </div>
        <div className="child2 my-auto"> 
        <div className="my-5 mx-3 pt-5">
            
        <h5 style={{color:"white",fontWeight:"lighter"}}><span style={{color: "#a25edc",fontWeight: "normal"}}>Profitable Blockchain</span></h5>
        <h1 className="py-3" id="h22" style={{marginTop:"2%",color:"white",WebkitBackgroundClip: "text",backgroundClip: "text"}}>
        Trusted Platform</h1><h6 style={{color:"white",fontWeight:"lighter"}}>
            <span style={{color: "white",fontWeight: "normal"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span></h6>
            <div className="row">
            <div className="my-5 col"><img src={svg1} alt="alt" style={{width:"48px"}}></img><br/><h4 style={{color:"white",fontWeight:"bolder"}}>250+ <br/><span style={{fontSize:"1.25rem",fontWeight:"normal"}}>Nodes</span></h4></div>
            <div className="my-5 col"><img src={svg2} alt="alt"style={{width:"48px"}}></img><br/><h4 style={{color:"white",fontWeight:"bolder"}}>1500+ <br/><span style={{fontSize:"1.25rem",fontWeight:"normal"}}>CLients</span></h4></div></div>
        </div>
        
        
        
        </div>
        
            
            
            </div></div></div> */}

          {/* <div className="parent my-lg-3" style={{backgroundColor:"#121638"}}>
              <div className="container">
              <div className="row">
                <div className="col">
        <div className="child2 my-auto"> 
        <div className="my-lg-5 pt-lg-5">
         
            
        <h5 style={{color:"white",fontWeight:"lighter"}}><span style={{color: "#a25edc",fontWeight: "normal"}}>Easy Transaction</span></h5>
        <h1 className="py-3" id="h22" style={{fontWeight:"1000",marginTop:"2%",color:"white",WebkitBackgroundClip: "text",backgroundClip: "text"}}>
        Multi Cryptocurrency</h1><h6 style={{color:"white",fontWeight:"lighter"}}>
            <span style={{color: "white",fontWeight: "normal"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span></h6>
            <div className="my-5"><a href="#contact" data-target="#contact" class="button_info my-3" style={{color: "121638"}}>Learn more</a></div>
        </div>
        
        
        </div></div>
       <div className="col">
        
        <div className="child1 my-5 mr-lg-5">
               <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/illustration-hero-new.png" alt="alt" className="img-fluid" id="img_trusted" style={{width:"600px"}}></img>
                    </div></div>




                    </div>
                    </div>
        </div> */}

          {/* <div id="Blog" class="py-5">
  <div class="b-mid-conatiner mx-xs-2" >
    <div class="bp-i mx-auto">
      <h5 id="blog"   class="my-3" style={{textAlign:"center",color:"#a25edc"}}>Our Blog</h5>
      <h1 class="my-4" id="blogf" style={{textAlign:"center",color:"white"}}><strong>Latest Blogs</strong></h1>
    </div>
    <div class="BP mx-xs-1">
      <div class="card-deck mx-lg-5 px-lg-5 mx-xs-0 px-xs-1">
        <div class="card"style={{backgroundColor:"transparent",color:"white"}}>
         
            <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/bitcoin-coins-on-black-background-e1614751767459.jpg" class="img-fluid" alt="..." style={{height:"49%"}}></img>
         
          
          <div class="card-body">
            <h5 class="card-title"><b>Investors See Bitcoin As A Long-Term Investment, Say Analyst</b></h5>
            <p class="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
          </div>
          <div class="card-footer">
            <a href="#1" target="_blank" rel="noreferrer">
            <button type="button" style={{color:"#a25edc"}} class="btn">Read More &#8594;</button>
            </a>
          </div>
        </div>
     <div class="card" style={{backgroundColor:"transparent",color:"white"}}>
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/stock-market-trading-on-a-tablet-computer.jpg"  style={{height: "49%"}} class="img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title"><b>Google Pushes Crypto Into Mainstream With Bitcoin, ETH</b></h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>


          <div class="card-footer">
            <a href="#1" >
            <button type="button" style={{color:"#a25edc"}} class="btn">Read More &#8594;</button>
            </a>
          </div>
        </div>


        <div class="card"  style={{backgroundColor:"transparent",color:"white"}}>
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/spending-money-online.jpg" class="img-fluid" style={{height: "49%"}} alt="..."></img>
          <div class="card-body">
          
            
            
            <h5 class="card-title"><b>How To Earn Your Passive Income For Your Future Planning</b></h5>
            <p class="card-text" >Lorem ipsum dolor sit amet, consecllum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          


          <div class="card-footer">
            <a href="#1">
            <button type="button" style={{color:"#a25edc"}} class="btn">Read More &#8594;</button>
          </a>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div> */}
        </section>
      </>
    );
  }
}

export default Info;
