import React from "react";
import Marquee from "react-fast-marquee";
import NewsCard from "./NewsCard";

const News = () => {
  const newsDB = [
    {
      title:
        "Autify Network raises $1.5 million in funding led by Loop Ventures & others",
      link: "https://inc42.com/buzz/blockchain-startup-autify-raises-funding-to-build-products-for-ecommerce-sector/",
    },
    {
      title:
        "Autify Network onboards Vijay Pravin Maharajan - CEO & founder of bitsCrunch as an advisor",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7006481545557409793",
    },
    {
      title: "Autify Network partnered with Biconomy and was awarded a grant",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6993052434843537408",
    },
    {
      title: "Autify Network graduated from Celo Camp Batch 6",
      link: "https://medium.com/celoorg/celo-camp-batch-6-teams-announced-with-new-founders-support-from-coinbase-cloud-e3c52087021b",
    },
    {
      title:
        "Autify Network partnered with Loop Ventures to bring transparency to the supply chain",
      link: "https://www.loop.markets/project-spotlight-autify/",
    },
    {
      title:
        "Autify Network integrated with Filecoin/IPFS and was awarded a grant by Filecoin Foundation",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6973287559229583360",
    },
    {
      title:
        "Autify Network graduated from the Stellar community fund Bootcamp",
      link: "https://communityfund.stellar.org/projects/autify-network",
    },
    {
      title:
        "Autify Network was selected by Google for Startup's 1st Indian edition of the Startup School initiative",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6956097624013721600",
    },
    {
      title:
        "Autify Network partnered with NEAR and was awarded a grant by NEAR Foundation",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6933274486532169728",
    },
    {
      title:
        "Autify Network graduated from the India Blockchain Accelerator by the Government of Telangana",
      link: "https://www.financialexpress.com/blockchain/the-india-blockchain-accelerator-shortlists-14-early-stage-startups-for-its-mentorship-and-financing-program/2519343/",
    },
    {
      title: "Autify Network onboards Keyur Shah, EX-CFO Polygon as an Advisor",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6920409884823863298",
    },
  ];
  return (
    <div className="section text-center mb-lg-5">
      <h2 className="title mt-5 mb-3 pt-5 mb-3" id="h22">
        <strong style={{ color: "white" }}>News</strong>
      </h2>
      <Marquee gradient={false} speed={40}>
        {newsDB.map((news) => (
          <NewsCard news={news} key={news.title} />
        ))}
      </Marquee>
    </div>
  );
};

export default News;
