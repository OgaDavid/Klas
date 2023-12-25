import type { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/prismadb";
import bcrypt from 'bcrypt';

interface User extends NextAuthUser {
  phoneNumber: string;
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

        const { email, password } = credentials as {
          email: string; 
          password: string
        }

        if (!email || !password) {
          return null;
        }

        const user = await prismadb.user.findUnique({
          where: {
            email
          }
        })

        if (!user) {
          throw new Error('Invalid email or password')
        }

        const passwordsMatch = await bcrypt.compare(password, user.hashedPassword as string);

        if (!passwordsMatch) {
          throw new Error('Invalid email or password')
        }

        // console.log(user);

        return user;
       
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {

      // pass in user id and phone number to jwt token

      if (user) {
        const { id, phoneNumber } = user as User
        return {
          ...token,
          id,
          phoneNumber
        }
      }

      return token
    },

    async session({ session, user, token }) {

      // pass in user id and phone number to session

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          phoneNumber: token.phoneNumber
        }
      }
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
