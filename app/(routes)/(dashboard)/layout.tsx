import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import getSession from "@/actions/get-user-session";
import DashboardNavigation from "@/components/dashboard/dashboard-navigation";

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
    <div>
      <DashboardHeader session={session} />
      <DashboardNavigation session={session} />
      {children}
    </div>
  );
}
