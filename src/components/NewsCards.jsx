import React from "react";
import NewsCard from "./NewsCard";

const NewsCards = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[67px] text-left text-15xl text-black font-poppins">
      <h2 className="m-0 relative text-[inherit] tracking-[0.05em] font-semibold font-inherit md:text-11xl sm:text-11xl">
        Latest News
      </h2>
      <div className="self-stretch flex flex-row items-center justify-center gap-[20px] text-5xl font-inter lg:flex-col lg:gap-[100px]">
        <NewsCard
          imageIds="/assets/news-card-image@2x.png"
          propPadding="10px"
          propBoxSizing="border-box"
        />
        <NewsCard
          imageIds="/assets/news-card-image1@2x.png"
          propPadding="10px"
          propBoxSizing="border-box"
        />
        <NewsCard
          imageIds="/assets/news-card-image1@2x.png"
          propPadding="10px"
          propBoxSizing="border-box"
        />
      </div>
    </div>
  );
};

export default NewsCards;
