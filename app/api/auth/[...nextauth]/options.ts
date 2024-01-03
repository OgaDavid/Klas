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
    async jwt({ token }) {
      // pass in user id and details to jwt token

      const user = await getUserById(token.sub as string);

      if (user) {
        token.id = user.id
        token.phoneNumber = user.phoneNumber
        token.about = user.about
        token.jobTitle = user.jobTitle
        token.bankName = user.bankName
        token.bankAccountName = user.bankAccountName
        token.bankAccountNumber = user.bankAccountNumber
      }

      console.log("jwt callback", {token})

      return token
    },

    async session({ session, token }) {

      // pass in other user details to session
      if (token) {
        session.user.id = token.id as string
        session.user.about = token.about as string
        session.user.phoneNumber = token.phoneNumber as string
        session.user.jobTitle = token.jobTitle as string
        session.user.bankName = token.bankName as string
        session.user.bankAccountName = token.bankAccountName as string
        session.user.bankAccountNumber = token.bankAccountNumber as string
      }

      console.log("session callback", {session})

      return session
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
