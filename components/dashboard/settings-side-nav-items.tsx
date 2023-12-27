"use client"

import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import { usePathname } from "next/navigation";

const SettingsSideNavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="mt-[30px]">
      <li>
        <Link
          href="/dashboard/settings"
        >
          <button className={`${
            pathname === "/dashboard/settings"
              ? "text-brand-blue-100 bg-[rgba(17,39,227,.03)]"
              : ""
          } flex py-4 gap-4 items-center w-full px-5 rounded-l-[8px]`}>
            <Icons.dashboard_settings_profile /> Your profile
          </button>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/settings/bank-details"
        >
          <button className={`${
            pathname.match("/dashboard/settings/bank-details")
              ? "text-brand-blue-100 bg-[rgba(17,39,227,.03)]"
              : ""
          } flex py-4 gap-4 items-center w-full px-5 rounded-l-[8px]`}>
            <Icons.dashboard_settings_bank />
            Bank details
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default SettingsSideNavItems;
