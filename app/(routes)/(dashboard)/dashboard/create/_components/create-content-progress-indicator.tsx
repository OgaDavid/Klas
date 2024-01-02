"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const CreateContentProgressIndicator = () => {
  const pathname = usePathname();
  return (
    <div className="flex relative items-center justify-between bg-[rgba(42,39,43,.15)] mx-auto h-[3px] max-w-[700px]">
      <span className="left-0 absolute border-[3px] border-brand-blue-100 bg-white w-[25px] h-[25px] rounded-full">
        <div className="block relative pt-[30px]">
          <p className="whitespace-nowrap -translate-x-[220%]">
            {pathname.match("/dashboard/create/lesson") ? "Course" : "Ebook"}{" "}
            details
          </p>
        </div>
      </span>
      <span className="right-0 absolute border-[3px] border-[rgba(42,39,43,.15] bg-white w-[25px] h-[25px] rounded-full">
        <div className="block relative pt-[30px]">
          <p className="whitespace-nowrap -translate-x-[150%]">Congrats 🎉</p>
        </div>
      </span>
    </div>
  );
};

export default CreateContentProgressIndicator;
