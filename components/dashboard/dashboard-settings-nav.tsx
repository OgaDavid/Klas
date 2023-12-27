import React from "react";
import SidebarUserInfo from "./user-info";
import SettingsSideNavItems from "./settings-side-nav-items";
import { Session } from "next-auth";
import SignOutButton from "../auth/signout";

const DashboardSettingsSideNav = ({ session }: { session: Session | null }) => {
  return (
    <aside className="border-r border-[rgba(0,0,0,.08)] flex flex-col">
      <SidebarUserInfo session={session} />
      <SettingsSideNavItems />
      <div className="mt-[140px]">
        <SignOutButton />
      </div>
    </aside>
  );
};

export default DashboardSettingsSideNav;
