"use client";
import { Flex, Icon, Spacer } from "@/components/chakra-ui";
import { AiFillHome } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePageNavbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Flex
      sx={{
        w: "100%",
        alignItems: "center",
        p: { base: 2, sm: 5, md: 10, lg: 10 },
      }}
    >
      <Link href="/">
        <Icon as={AiFillHome} boxSize={6} color="cyan.300" />
      </Link>
      <Spacer />
      {session?.user && (
        <Icon
          as={MdLogout}
          onClick={() => {
            signOut();
          }}
          boxSize={6}
          color="red.500"
          sx={{
            cursor: "pointer",
          }}
        />
      )}
    </Flex>
  );
};

export default ProfilePageNavbar;
