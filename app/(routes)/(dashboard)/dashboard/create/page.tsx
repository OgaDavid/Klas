import React from "react";
import { Metadata } from "next";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Create a content",
    template: "",
  },
};

const contentOptions = [
  {
    title: "Recorded courses",
    description: "Upload and sell your courses",
    icon: "/images/dashboard/recorded-courses.png",
  },
  {
    title: "Ebooks",
    description: "Sell interactive ebooks",
    icon: "/images/dashboard/ebooks.png",
  },
  {
    title: "Live classes",
    description: "Host immersive & fun classes",
    icon: "/images/dashboard/live-classes.png",
  },
];

const DashboardCreatePage = () => {
  return (
    <section className="max-md:px-5">
      <div className="flex flex-col gap-2 md:gap-4 items-center">
        <h3 className="font-bold text-[28px] text-center">
          What kind of content is it?
        </h3>
        <p className="mb-10 text-center text-[rgba(0,0,0,.5)]">
          Choose the type of content you would like to create
        </p>
      </div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {contentOptions.map((content, index) => (
          <div
            className="w-80 border border-[rgba(0,0,0,.08)] flex flex-col items-center justify-center rounded-[8px] p-[34px]"
            key={index}
          >
            <div className="mb-6">
              <div className="p-6 rounded-full bg-brand-blue-100">
                <Image className="" src={content.icon} alt="icon" width={30} height={30} />
              </div>
            </div>
            <h4 className="font-medium text-xl text-center mb-2">
              {content.title}
            </h4>
            <p className="text-center mb-10 text-[rgba(0,0,0,.5)]">
              {content.description}
            </p>
            <Button className="py-6 font-semibold outline-button rounded-[8px] border bg-white text-brand-blue-100 border-brand-blue-100 px-7 text-sm w-[150px]">
              Start
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardCreatePage;
