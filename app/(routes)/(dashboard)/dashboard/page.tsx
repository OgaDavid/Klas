import React from "react";
import { Metadata } from "next";
import { DashboardStats } from "@/data/data";
import StatCard from "@/app/(routes)/(dashboard)/components/dashboard-stats-card";

export const metadata: Metadata = {
  title: "Dashboard Home",
};

const DashboardHome = () => {
  return (
    <div className="md:px-10 mt-8">
      <div className="grid mb-20 max-md:hidden max-lg:grid-cols-2 grid-cols-3 gap-8">
        {DashboardStats.map((stat, idx) => (
          <div key={idx}>
            <StatCard stat={stat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;

// todo
// fix overflowing in the dashboard navigation
// finish lesson and ebook create page
// finish settings page
