import React from "react";
import { SelectedNewsCard } from ".";
import { Grid, GridItem } from "./chakra-ui";

const SelectedNews = ({ title, allNews }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[67px] text-left text-15xl text-black font-poppins">
      <h2 className="m-0 relative text-[inherit] tracking-[0.05em] font-semibold font-inherit md:text-11xl sm:text-11xl">
        {title}
      </h2>

      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        {allNews.map((news, index) => (
          <GridItem colSpan={{ base: 12, sm: 12, md: 6 }} key={news._id}>
            <SelectedNewsCard propBoxSizing="border-box" news={news} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default SelectedNews;
