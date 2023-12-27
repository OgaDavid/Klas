import React from "react";
import { getServerSession } from "next-auth";
import DashboardSettingsSideNav from "@/components/dashboard/dashboard-settings-nav";

export default async function DashboardSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="flex px-10">
      <DashboardSettingsSideNav session={session} />
      <div className="p-10">{children}</div>
    </div>
  );
}
