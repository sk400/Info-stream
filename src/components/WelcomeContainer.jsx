import { newsCategories } from "@/lib/data";
import { Searchbar } from ".";
import { Grid, GridItem } from "./chakra-ui";
import Link from "next/link";

const WelcomeContainer = () => {
  return (
    <div className="self-stretch rounded-xl bg-whitesmoke overflow-hidden flex flex-col py-[45px] px-[124px]  items-center justify-start gap-[100px] text-center  text-black font-poppins lg:pl-[70px] lg:pr-[70px] lg:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border">
      <h2 className="m-0 self-stretch relative text-[inherit] tracking-[0.3em] font-semibold font-inherit text-7xl">
        WELCOME TO BULETIN
      </h2>

      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        {newsCategories?.map((category, index) => (
          <GridItem colSpan={{ base: 12, sm: 6, md: 4, lg: 2 }} key={index}>
            <Link
              href={`/category?category=${category?.toString().toLowerCase()}`}
            >
              <p className="m-0 relative tracking-[0.2em] font-semibold">
                {category}
              </p>
            </Link>
          </GridItem>
        ))}
      </Grid>

      <Searchbar />
    </div>
  );
};

export default WelcomeContainer;
