"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "../../../../components/icons";

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: `${siteConfig.url}/login` })}
      className="flex items-center justify-center px-6 text-brand-blue-100 font-bold gap-[10px]"
    >
      <Icons.dashboard_settings_logout />
      Logout
    </button>
  );
};

export default SignOutButton;
