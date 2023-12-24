"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const SignOutButton = () => {
  return (
    <Button
      variant="secondary"
      onClick={() => signOut({ callbackUrl: `${siteConfig.url}/login` })}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
