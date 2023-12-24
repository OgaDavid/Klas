"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  return (
    <Button
      variant="secondary"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
