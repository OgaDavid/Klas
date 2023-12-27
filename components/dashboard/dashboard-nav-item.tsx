"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import { usePathname } from "next/navigation";

const DashboardNavItem = ({
  item,
}: {
  item: {
    name: string;
    href: string;
    icon: any;
    current: boolean;
  };
}) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center px-4 pt-2 text-sm font-medium">
      <div className="flex flex-col gap-3 items-center">
        <Link
          href={item.href}
          className={`${
            pathname === item.href || pathname.includes("/settings/bank-details") && item.name === "Settings" ? "group is-active bg-white/50" : ""
          } lg:w-[50px] lg:h-[50px] w-10 h-10 flex items-center justify-center rounded-full bg-white`}
        >
          {item.icon}
        </Link>
        <p className="max-md-920:text-xs">{item.name}</p>
        <Icons.dashboard_active_arrow
          className={`${pathname === item.href || pathname.includes("/settings/bank-details") && item.name === "Settings" ? "" : "opacity-0"} pt-2`}
        />
      </div>
    </div>
  );
};

export default DashboardNavItem;
