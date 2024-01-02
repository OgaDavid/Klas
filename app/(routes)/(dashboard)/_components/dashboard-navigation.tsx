"use client";

import React from "react";
import { Icons } from "../../../../components/icons";
import UserAvatar from "./dashboard-avatar";
import DashboardNavItem from "./dashboard-nav-item";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export const DashboardNavigationItems = [
  {
    name: "Home",
    href: "/dashboard",
    icon: (
      <Icons.dashboard_home className="text-brand-blue-100 group-[.is-active]:text-white" />
    ),
    current: true,
  },
  {
    name: "Content",
    href: "/dashboard/content",
    icon: (
      <Icons.dashboard_content className="text-brand-blue-100 group-[.is-active]:text-white" />
    ),
    current: false,
  },
  {
    name: "Recordings",
    href: "/dashboard/recordings",
    icon: (
      <Icons.dashboard_recordings className="text-brand-blue-100 group-[.is-active]:text-white" />
    ),
    current: false,
  },
  {
    name: "Resources",
    href: "/dashboard/resources",
    icon: (
      <Icons.dashboard_resources className="text-brand-blue-100 group-[.is-active]:text-white" />
    ),
    current: false,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: (
      <Icons.dashboard_settings className="text-brand-blue-100 group-[.is-active]:text-white" />
    ),
    current: false,
  },
];

const DashboardNavigation = () => {

  const { data: userSession } = useSession();

  const user = userSession?.user


    const pathname = usePathname();

  return (
    <div className={`${pathname.startsWith('/dashboard/create') ? "hidden" : ""} px-6 md:mx-10 md:pt-8 md:rounded-2xl flex flex-col dashboard-packages-bg items-center text-white justify-center`}>
      <h2 className="font-medium max-md:hidden text-4xl">
        What will you teach today?
      </h2>
      <div className="mx-auto w-full mt-[30px] mb-10 flex items-center justify-center gap-5">
        <div className="w-full md-920:w-[800px]">
          <div className="flex items-center justify-center">
            <span className="bg-white rounded-l-[8px] py-[14px] px-[3px]">
              <Icons.dashboard_input_search className="text-[#00000026] flex items-center mt-[1px] mr-[2px] ml-[15px]" />
            </span>
            <input
              placeholder="Search for your content"
              className="py-[10px] border-none outline-none place rounded-l-none rounded-r-[8px] px-[3px] placeholder:text-[rgba(0,0,0,.25)] w-full text-[rgba(0,0,0,.25)]"
            />
          </div>
        </div>
        <span className="md:hidden">
          <UserAvatar imageUrl={user?.image} />
        </span>
      </div>
      <div className="flex items-center max-w-[820px] w-full justify-between mx-auto">
        {DashboardNavigationItems.map((item) => (
          <div key={item.name}>
            <DashboardNavItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardNavigation;
