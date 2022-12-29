import Image from "next/image";
import React from "react";
import externalLink from "../public/assets/External_link_font_awesome.png";

const NewsCard = ({ news }) => {
  return (
    <a target="_blank" href={news.link} className="news-link">
      <div className="news-card">
        <h2 className="news-title">{news.title}</h2>
        <div className="read-more">
          <Image
            src={externalLink}
            className="external-link"
            alt="external-link"
          />
          <span>Read More</span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
