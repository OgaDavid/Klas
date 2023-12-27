import React from "react";
import MainHeader from "@/app/(routes)/(main)/components/main-header";
import MainFooter from "@/app/(routes)/(main)/components/main-footer";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
