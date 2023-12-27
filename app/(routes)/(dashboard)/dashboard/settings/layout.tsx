import React from "react";
import { getServerSession } from "next-auth";
import DashboardSettingsSideNav from "@/app/(routes)/(dashboard)/dashboard/settings/components/settings-side-nav";
import SettingsHeader from "@/app/(routes)/(dashboard)/dashboard/settings/components/settings-header";

export default async function DashboardSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="flex px-10">
      <DashboardSettingsSideNav session={session} />
      <div className="p-10">
        <SettingsHeader />
        {children}
      </div>
    </div>
  );
}
