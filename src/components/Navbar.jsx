"use client";

import Link from "next/link";
import { signIn, useSession, getProviders } from "next-auth/react";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Image } from "@chakra-ui/next-js";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState([]);

  // console.log(session);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setupProviders();
  }, []);

  return (
    <nav className="self-stretch flex flex-row items-center justify-between text-left text-15xl text-black font-inter pt-4">
      <Link href="/">
        <Image src="/logo.png" alt="Infostream logo" width="150" height="25" />
      </Link>

      {!session && (
        <>
          {Object?.values(providers)?.map((provider) => (
            <Button
              key={provider.name}
              size="lg"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                bgColor: "white",
                px: 3,
                py: 2,
              }}
              leftIcon={<FcGoogle />}
              onClick={() => {
                signIn(provider.id);
              }}
            >
              Sign in
            </Button>
          ))}
        </>
      )}

      {session?.user && (
        <Link href={`/profile/${session?.user?.id}`}>
          <img
            className="relative rounded-31xl w-[55px] h-[55px] overflow-hidden shrink-0 object-cover sm:w-10 sm:h-10 "
            alt=""
            src={session?.user?.image}
          />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
