"use client";
import React from "react";
import { Icons } from "../icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserAvatar from "./avatar";
import { usePathname } from "next/navigation";

const DashboardHeader = ({
  session,
}: {
  session:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}) => {
  const pathname = usePathname();

  const createContent = pathname.match("/dashboard/create");

  return (
    <div>
      {!createContent ? (
        <div>
          <div className="flex mb-10 items-center justify-between">
            <Link href="/">
              <Icons.logo_dashboard className="" />
            </Link>
            <span className="flex items-center space-x-4">
              <Link href="/dashboard/create">
                <Button className="px-9 py-6 rounded-[8px] btn-gradient font-bold">
                  Create a content
                </Button>
              </Link>
              <UserAvatar imageUrl={session?.image} />
            </span>
          </div>
        </div>
      ) : (
        <div>
          <Link className="flex items-center gap-[10px] font-bold text-xl text-brand-blue-200" href="/dashboard">
            <Icons.back_icon />
            Back
          </Link>
          <div className="mt-[30px] mb-10 border border-gray-50"/>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
