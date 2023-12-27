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

  return (
    <div className="md:px-10">
      {/*<SignOutButton /> */}
    </div>
  );
};

export default DashboardHome;


// todo
// fix login form password error
// build out the 3 boxes on dashboard home - total students, earnings and classes
// fix overflowing in the dashboard navigation
// finish lesson and ebook create page
