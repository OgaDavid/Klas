import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import bcrypt from 'bcrypt';


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
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
