import React from "react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "@/components/auth/signout";

export const metadata: Metadata = {
  title: "Dashboard Home",
};

const DashboardHome = async () => {
  const session = await getServerSession(authOptions);

  // console.log(session);

  return <div>
    <h1>Dashboard</h1>
    <p>Hello { session?.user?.name }</p>
    <SignOutButton />
  </div>;
};

export default DashboardHome;
