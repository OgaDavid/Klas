import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import getSession from "@/actions/get-user-session";

export const metadata: Metadata = {
  title: {
    default: "Klas: Dashboard",
    template: "Klas: %s",
  },
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="md:px-10 md:py-10">
      <div className="">
        <DashboardHeader session={session} />
        {children}
      </div>
    </div>
  );
}
