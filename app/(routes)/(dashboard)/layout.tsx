import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/app/(routes)/(dashboard)/_components/dashboard-header";
import getSession from "@/actions/get-user-session";
import DashboardNavigation from "@/app/(routes)/(dashboard)/_components/dashboard-navigation";

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
    <div className="pb-10">
      <DashboardHeader />
      <DashboardNavigation />
      {children}
    </div>
  );
}
