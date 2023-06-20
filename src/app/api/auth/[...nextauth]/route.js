import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { client } from "../../../../../sanity/lib/client";
import { userQuery } from "@/lib/sanityQueries";
import { v4 as uuidv4 } from "uuid";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const query = userQuery(session?.user?.email);

        const userData = await client.fetch(query);

        session.user.id = userData[0]?._id?.toString();

        return session;
      } catch (error) {
        console.log(error);
      }
    },

    async signIn({ profile }) {
      try {
        const doc = {
          _id: uuidv4(),
          name: profile?.name,
          image: profile?.picture,
          email: profile?.email,
          _type: "user",
        };

        await client.createIfNotExists(doc).then(() => {
          console.log("SignIn successfully");
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
