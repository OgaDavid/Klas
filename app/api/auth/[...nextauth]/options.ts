import type { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcryptjs";
import { LoginFormSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/actions/get-user";

interface User extends NextAuthUser {
  id: string;
  jobTitle: string;
  phoneNumber: string;
  about: string;
  bankName: string;
  bankAccountNumber: string;
  bankAccountName: string;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        fullName: {
          label: "Full Name",
          type: "text",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
        },
        password: { label: "Password", type: "password" },
        phoneNumber: {
          label: "Phone Number",
          type: "text",
          placeholder: "Enter your phone number",
        },
      },
      async authorize(credentials) {
        const verifiedCredentials = LoginFormSchema.safeParse(credentials);

        if (!verifiedCredentials.success) {
          throw new Error("Invalid fields");
        }

        const { email, password } = verifiedCredentials.data;

        const user = await getUserByEmail(email);

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const passwordsMatch = await bcrypt.compare(
          password,
          user.password as string
        );

        if (!passwordsMatch) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt callback", { token });
      
      if (user) {
        const {
          id,
          phoneNumber,
          about,
          jobTitle,
          bankName,
          bankAccountName,
          bankAccountNumber,
        } = user as User;
        return {
          ...token,
          id,
          phoneNumber,
          about,
          jobTitle,
          bankName,
          bankAccountName,
          bankAccountNumber,
        };
      }

      return token;
    },

    async session({ session, token }) {
      console.log({ sessionToken: token, session });

      const userDetails = await getUserById(token.sub as string);
      // console.log(userDetails);

      if (userDetails) {
        session.user.id = userDetails.id;
        session.user.phoneNumber = userDetails.phoneNumber;
        session.user.about = userDetails.about;
        session.user.jobTitle = userDetails.jobTitle;
        session.user.bankName = userDetails.bankName;
        session.user.bankAccountName = userDetails.bankAccountName;
        session.user.bankAccountNumber = userDetails.bankAccountNumber;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
