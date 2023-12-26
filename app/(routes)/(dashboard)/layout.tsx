import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import getSession from "@/actions/get-user-session";
import UserAvatar from "@/components/dashboard/avatar";
import DashboardNavItem from "@/components/dashboard/dashboard-nav-item";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: {
    default: "Klas: Dashboard",
    template: "Klas: %s",
  },
};

export const DashboardNavigation = [
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

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="">
      <div className="">
        <DashboardHeader session={session} />
        <div className="px-6 md:mx-10 pt-8 rounded-2xl flex flex-col dashboard-packages-bg items-center text-white justify-center">
          <h2 className="font-medium text-4xl">What will you teach today?</h2>
          <div className="mx-auto mt-[30px] mb-10 flex items-center justify-center gap-2">
            <div className="w-[800px]">
              <div className="flex items-center justify-center">
                <span className="bg-white rounded-l-[8px] py-[16px] px-[3px]">
                  <Icons.dashboard_input_search className="text-[#00000026] flex items-center mt-[1px] mr-[2px] ml-[15px]" />
                </span>
                <input
                  placeholder="Search for your content"
                  className="py-[12px] border-none outline-none place rounded-l-none rounded-r-[8px] px-[3px] placeholder:text-[rgba(0,0,0,.25)] w-full text-[rgba(0,0,0,.25)]"
                />
              </div>
            </div>
            <span className="md:hidden">
              <UserAvatar imageUrl={session?.image} />
            </span>
          </div>
          <div className="flex items-center max-w-[820px] w-full justify-between mx-auto">
            {DashboardNavigation.map((item) => (
              <div key={item.name}>
                <DashboardNavItem item={item} />
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
