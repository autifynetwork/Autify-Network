import React from "react";
import Image from "next/image";

// import img1 from "..//assets/Poor Quality Product Market.webp";
// import img2 from "..//assets/Damaging to Brand Identity.webp";
// import img3 from "..//assets/Risk to Health _ Safety.webp";
// import img4 from "..//assets/Costs Jobs and Revenue.webp";
// import img5 from "..//assets/Instant Proof of Origin and Authenticity.webp";
// import img6 from "..//assets/Independently Verifiable Digital Records.webp";
// import img7 from "..//assets/Decentralized Tamper-proof System.webp";
// import img8 from "../public/assets/Reliable Dependable Product Validation.webp";
// import img9 from "..//assets/Distinct Product Identity.webp";
// import img10 from "..//assets/Unique Authentication System.webp";
// import img11 from "..//assets/Instant Clone Identification.webp";
// import img12 from "..//assets/Permanent Data Ledger.webp";
// import img13 from "..//assets/Pre-listing Product Authentication.png";
// import img14 from "..//assets/Immutable Brand Information.png";
// import img15 from "../public/assets/Trustworthy Customer Experience.png";
// import img16 from "..//assets/Reduced Returns & Exchanges1.png";
// import img17 from "..//assets/Pharmaceuticals.png";
// import img19 from "..//assets/Lifestyle & Apparel.png";
// import img18 from "../public/assets/Food & Beverage.png";
// import img22 from "..//assets/Luxury & Jewelery.png";
// import img20 from "..//assets/Wine & Spirits.png";
// import img21 from "..//assets/Agriculture.png";
// import img23 from "..//assets/Electrical Equipments1.png";
// import img24 from "..//assets/Perfumes and Cosmetics.png";

import img25 from "../public/assets/Content Pics/The Future of Global Retail/Affects Brand Reputation.png";
import img26 from "../public/assets/Content Pics/The Future of Global Retail/Can’t ascertain authenticity.png";
import img27 from "../public/assets/Content Pics/The Future of Global Retail/No transparency in supply chain.png";
import img28 from "../public/assets/Content Pics/The Future of Global Retail/Risk to Health _ Safety.png";

import img29 from "../public/assets/Content Pics/Up your game with uncontested truth/Consumer interaction.png";
import img30 from "../public/assets/Content Pics/Up your game with uncontested truth/Product authenticity.png";
import img31 from "../public/assets/Content Pics/Up your game with uncontested truth/Product birth certificate.png";
import img32 from "../public/assets/Content Pics/Up your game with uncontested truth/Real-time item-level monitoring.png";

import img33 from "../public/assets/Content Pics/Smart contract based parametric insurance/Extensive data analysis.png";
import img34 from "../public/assets/Content Pics/Smart contract based parametric insurance/Automated payment of claims.png";
import img35 from "../public/assets/Content Pics/Smart contract based parametric insurance/Reduced chance of disputes1.png";
import img36 from "../public/assets/Content Pics/Smart contract based parametric insurance/Comprehensive risk assessment.png";

import img37 from "../public/assets/Content Pics/Unleashing the power of decentralised finance/Access to micro loans.png";
import img38 from "../public/assets/Content Pics/Unleashing the power of decentralised finance/Community Liquidity Pooling.png";
import img39 from "../public/assets/Content Pics/Unleashing the power of decentralised finance/Operates in a permissionless manner1.png";
import img40 from "../public/assets/Content Pics/Unleashing the power of decentralised finance/Partner Network Lending.png";

import img41 from "../public/assets/Content Pics/Ensuring a secure E-commerce experience/Enhanced transparency.png";
import img42 from "../public/assets/Content Pics/Ensuring a secure E-commerce experience/Proof of ownership and authenticity.png";
import img43 from "../public/assets/Content Pics/Ensuring a secure E-commerce experience/Trustworthy customer experience.png";
import img44 from "../public/assets/Content Pics/Ensuring a secure E-commerce experience/Reduced Returns _ Exchanges.png";

import img45 from "../public/assets/Content Pics/Industries we are targeting/Lifestyle _ Apparel.png";
import img46 from "../public/assets/Content Pics/Industries we are targeting/Luxury _ Jewellery.png";
import img47 from "../public/assets/Content Pics/Industries we are targeting/Perfume and Cosmetics.png";
import img48 from "../public/assets/Content Pics/Industries we are targeting/Electrical Equipment.png";
import img49 from "../public/assets/Content Pics/Industries we are targeting/Wine and Spirits.png";
import img50 from "../public/assets/Content Pics/Industries we are targeting/Automotive.png";
import img51 from "../public/assets/Content Pics/Industries we are targeting/Pharma and Healthcare.png";

class Info extends React.Component {
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
  }
  handleNav = (direction) => {
    if (direction === "left") {
      return this.navRef ? (this.navRef.current.scrollLeft -= 800) : null;
    } else if (direction === "right") {
      return this.navRef ? (this.navRef.current.scrollLeft += 800) : null;
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
                    <h5
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="word_align_center"
                    >
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        {" "}
                        A revolution for every industry
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto word_align_center"
                      id="h22"
                      style={{
                        marginTop: "2%",
                        color: "white",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      Systemic Problems Across Supply Chains
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace word_align_center"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Global trade and supply chains are highly complex and
                        involve many actors – both public and private.
                        Information is pushed between actors and re-keyed into
                        new systems leading to a loss of data integrity and
                        authenticity. With consumers increasingly concerned
                        about where products come from, the meaning of
                        responsible business is shifting, demanding companies to
                        be more transparent, source ethically, and operate
                        sustainably by reducing the wastage of resources.
                      </span>
                    </h6>
                    <div className="my-5 button_container">
                      <a
                        className="button_info my-3"
                        href="/ContactPage"
                        // data-target="#contact"
                      >
                        Contact Us
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
                              <Image
                                src={img25}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Affects Brand Reputation & Revenue Loss
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row mb-5 my-md-0 mx-auto" id="ok">
                            <div className="row">
                              <Image
                                src={img27}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Disparate Data for Supply Chain Traceability
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
                              <Image
                                src={img26}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Counterfeiting & Proving Product Authenticity
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row mb-2 mx-auto" id="ok">
                            <div className="row">
                              <Image
                                src={img28}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Risk to Health Safety & Insurance Claims Process
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
                              <Image
                                src={img30}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Real-Time Product Authentication
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
                              <Image
                                src={img29}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Consumer Interaction & Collaboration
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
                              <Image
                                src={img31}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Digital Twins/ Product Birth Certificate
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="row  my-3 mx-auto" id="ok">
                            <div className="row">
                              <Image
                                src={img32}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                                Real-Time Report to Authorized Actors
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
                    <h5
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="word_align_center"
                    >
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        Autify Authentication Block
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto word_align_center"
                      id="h22"
                      style={{ marginTop: "2%", color: "white" }}
                    >
                      Up Your Game With Uncontested Truth
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace word_align_center"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        The supply chain of the future is significantly enhanced
                        by Distributed Ledger Technology. Original documents and
                        events are reported in real-time and made available to
                        authorized actors. This way, everyone has access to the
                        original data instead of duplicated data in multiple
                        siloed systems. The result is better, faster and more
                        cost-efficient trade.
                      </span>
                    </h6>
                    <div className="my-5 button_container">
                      <a
                        href="/ContactPage"
                        // data-target="#contact"
                        className="button_info my-3"
                      >
                        Contact Us
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
                    <h5
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="word_align_center"
                    >
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        {" "}
                        Autify Insurance Block
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto word_align_center"
                      id="h22"
                      style={{
                        marginTop: "2%",
                        color: "white",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      Smart Contract Based Parametric Insurance
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace word_align_center"
                    >
                      <span style={{ color: "white", fontWeight: "normal" }}>
                        Traditional insurance firms can leverage the benefits of
                        blockchain technology by creating advanced smart
                        contract-based parametric insurance agreements that
                        automatically trigger payouts based on real-world data
                        to suppliers, manufacturers & brand owners.
                      </span>
                    </h6>
                    <div className="my-5 button_container">
                      <a
                        className="button_info my-3"
                        href="/ContactPage"
                        // data-target="#contact"
                      >
                        Contact Us
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
                              <Image
                                src={img33}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img34}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img35}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img36}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img40}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img39}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img38}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img37}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                    <h5
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="word_align_center"
                    >
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        Autify DeFi Block
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto word_align_center"
                      id="h22"
                      style={{ marginTop: "2%", color: "white" }}
                    >
                      Unleashing the power of Decentralised Finance
                    </h1>
                    <h6
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="mr-3 p-linespace word_align_center"
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
                    <div className="my-5 button_container">
                      <a
                        href="/ContactPage"
                        // data-target="#contact"
                        className="button_info my-3"
                      >
                        Contact Us
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
                    <h5
                      style={{ color: "white", fontWeight: "lighter" }}
                      className="word_align_center"
                    >
                      <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                        Safer online shopping
                      </span>
                    </h5>
                    <h1
                      className="py-3 mx-auto word_align_center"
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
                      className="mr-3 p-linespace word_align_center"
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
                    <div className="my-5 button_container">
                      <a
                        className="button_info my-3"
                        href="/ContactPage"
                        // data-target="#contact"
                      >
                        Contact Us
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
                              <Image
                                src={img41}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img42}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img43}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                              <Image
                                src={img44}
                                height={50}
                                width={50}
                                alt="alt"
                                className="mx-auto img-fluid img-main-card"
                                id="neu_img"
                              ></Image>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-lg-3 pb-lg-1 pt-lg-0 pt-xs-5">
          <div className="container">
            <h5
              style={{ color: "white", fontWeight: "lighter" }}
              className="word_align_center"
            >
              <span style={{ color: "#a25edc", fontWeight: "normal" }}>
                Comprehensive solution for brands
              </span>
            </h5>
            <h2
              className="mt-3 mr-auto word_align_center"
              id="h22"
              style={{ marginTop: "2%", color: "white" }}
            >
              Industries we are targeting
            </h2>
          </div>
          <div className="row ind_cont">
            <div className="hidden-xs col-md-1 col-xs-0 text-white hide_mob">
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
              className="col grid-ind-content mb-lg-5 pb-lg-5 flex-row flex-nowrap overflow-auto x-scroll-disabled row-xs-12"
              id="phone"
              ref={this.navRef}
            >
              <div
                className="col my-3 mx-auto offer_card"
                style={{ placeContent: "center", placeItems: "center" }}
              >
                <Image
                  src={img45}
                  height={50}
                  width={50}
                  alt="alt"
                  className="img-fluid rounded-Image ind_target"
                  id="neu_img"
                ></Image>
                <h4 style={{ color: "white" }}>Apparel & Footwear</h4>
              </div>
              <div
                className="col my-3 mx-auto offer_card"
                style={{ placeContent: "center", placeItems: "center" }}
              >
                <Image
                  src={img46}
                  height={50}
                  width={50}
                  alt="alt"
                  className="img-fluid rounded-Image ind_target"
                  id="neu_img"
                ></Image>
                <h4 style={{ color: "white" }}>Luxury and Jewellery</h4>
              </div>
              <div
                className="col my-3 mx-auto offer_card"
                style={{ placeContent: "center", placeItems: "center" }}
              >
                <Image
                  src={img47}
                  height={50}
                  width={50}
                  alt="alt"
                  className="img-fluid rounded-Image ind_target"
                  id="neu_img"
                ></Image>
                <h4 style={{ color: "white" }}>Perfume and Cosmetics</h4>
              </div>

              <div
                className="col my-3 mx-auto offer_card"
                style={{ placeContent: "center", placeItems: "center" }}
              >
                <Image
                  src={img49}
                  alt="alt"
                  className="img-fluid rounded-Image ind_target"
                  id="neu_img"
                ></Image>
                <h4 style={{ color: "white" }}>Wine and Spirits</h4>
              </div>
              <div
                className="col my-3 mx-auto offer_card"
                style={{ placeContent: "center", placeItems: "center" }}
              >
                <Image
                  src={img50}
                  alt="alt"
                  className="img-fluid rounded-Image ind_target"
                  id="neu_img"
                ></Image>
                <h4 style={{ color: "white" }}>Automotive</h4>
              </div>
              {/* <div
                className="col my-3 mx-auto offer_card"
                style={{ placeContent: "center", placeItems: "center" }}
              >
                <Image
                  src={img51}
                  height={50}
                  width={50}
                  alt="alt"
                  className="img-fluid rounded-Image ind_target"
                  id="neu_img"
                ></Image>
                <h4 style={{ color: "white" }}>Pharma and Healthcare</h4>
              </div> */}
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
        </div>
      </>
    );
  }
}

export default Info;
