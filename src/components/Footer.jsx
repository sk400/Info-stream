import Image from "next/image";
import { FooterIcons } from ".";

const Footer = () => {
  return (
    <footer className="self-stretch h-[143px] overflow-hidden shrink-0 flex flex-row py-[57px] px-0 box-border items-center justify-between text-left text-11xl text-black font-inter">
      <Image src="/logo.png" alt="Infostream logo" width="150" height="25" />

      <FooterIcons />
    </footer>
  );
};

export default Footer;
