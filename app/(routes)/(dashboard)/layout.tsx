import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Klas: Dashboard",
    template: "Klas: Dashboard %s",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
}
