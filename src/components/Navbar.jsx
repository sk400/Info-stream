import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="self-stretch flex flex-row items-center justify-between text-left text-15xl text-black font-inter">
      <h1 className="m-0 relative text-[inherit] font-semibold font-inherit md:text-13xl sm:text-9xl">
        Buletin
      </h1>
      <Link href={`/profile`}>
        <img
          className="relative rounded-31xl w-[55px] h-[55px] overflow-hidden shrink-0 object-cover sm:w-10 sm:h-10 "
          alt=""
          src="/assets/profile-image@2x.png"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
