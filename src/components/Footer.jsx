import React from "react";

const Footer = () => {
  return (
    <footer className="self-stretch h-[143px] overflow-hidden shrink-0 flex flex-row py-[57px] px-0 box-border items-center justify-between text-left text-11xl text-black font-inter">
      <h2 className="m-0 relative text-[inherit] font-semibold font-inherit md:text-11xl sm:text-7xl mq320:text-7xl mq420:text-7xl">
        Buletin
      </h2>
      <div className="flex flex-row items-center justify-start gap-[30px] md:gap-[20px] sm:gap-[15px] mq320:gap-[15px] mq420:gap-[15px]">
        <img
          className="relative w-[30px] h-[30px] object-cover sm:w-[25px] sm:h-[25px] mq420:w-5 mq420:h-5"
          alt=""
          src="/assets/vector1@2x.png"
        />
        <img
          className="relative w-[30px] h-[30px] object-cover sm:w-[25px] sm:h-[25px] mq420:w-5 mq420:h-5"
          alt=""
          src="/assets/vector2@2x.png"
        />
        <img
          className="relative w-[30px] h-[30px] object-cover sm:w-[25px] sm:h-[25px] mq420:w-5 mq420:h-5"
          alt=""
          src="/assets/vector3@2x.png"
        />
      </div>
    </footer>
  );
};

export default Footer;
