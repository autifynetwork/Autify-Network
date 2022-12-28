import React from "react";
import Marquee from "react-fast-marquee";
import NewsCard from "./NewsCard";

const News = () => {
  const newsDB = [
    {
      title:
        "Autify Network Raises Funding From Loop Ventures, Near Protocol & Others To Build Products For Ecommerce Sector",
      link: "https://inc42.com/buzz/blockchain-startup-autify-raises-funding-to-build-products-for-ecommerce-sector/",
    },
    {
      title:
        "Vijay Pravin Maharajan - CEO & founder of bitsCrunch has joined Autify Network as an advisor",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7006481545557409793",
    },
    {
      title: "Autify Network has been awarded a grant from Biconomy",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6993052434843537408",
    },
    {
      title: "Autify Network Gets Selected in Celo Camp Batch 6",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6985857885108912128",
    },
    {
      title:
        "Autify Network X  Loop Ventures: A Big Step in bringing transparency to the supply chain",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6976508917249953792",
    },
    {
      title: "Autify Network has been awarded a grant from Filecoin Foundation",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6973287559229583360",
    },
    {
      title: "Autify Network has joined the ZILHive incubation program",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6957548101679108096",
    },
    {
      title:
        "Autify Network is Google for Startup's 1st Indian edition of the Startup School initiative",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6956097624013721600",
    },
    {
      title:
        "Super excited to announce that Autify Network has received a grant from Near Inc.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6933274486532169728",
    },
    {
      title:
        "Autify Network gets selected in India Blockchain Accelerator— a joint initiative of the Government of Telangana, CoinSwitch, and Lumos Labs",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6930484263490392064",
    },
    {
      title:
        "Autify Network onboards Ascent Advisors & Keyur Shah - former Finance Lead at Polygon as Advisor",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6920409884823863298",
    },
  ];
  return (
    <div className="section text-center mb-lg-5">
      <h2 className="title mt-5 mb-3 pt-5 mb-3" id="h22">
        <strong style={{ color: "white" }}>News</strong>
      </h2>
      <Marquee gradient={false} speed={100}>
        {newsDB.map((news) => (
          <NewsCard news={news} key={news.title} />
        ))}
      </Marquee>
    </div>
  );
};

export default News;
