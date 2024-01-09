import React from "react";
import Link from "next/link";
// import FrequentlyAskedQuestions from "../components/FAQ";
// import { PricingFaqData } from "@/data/Data";
import CallToAction from "@/app/(routes)/(main)/components/main-call-to-action";
import PageHeaders from "@/app/(routes)/(main)/components/main-page-headers";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { PlusPerks, PricingFAQ } from "@/data/data";
import { FAQ } from "@/app/(routes)/(main)/components/main-faq";

const PricingPage = () => {
  return (
    <main>
      <PageHeaders pb text="Set up your virtual academy today" gradient sm />

      <section className="py-[80px] mt-[80px] w-full h-fit">
        <div className="container">
          <div className="grid items-center gap-[50px] lg-1150:gap-[80px] justify-center grid-cols-1 md-920:grid-cols-5">
            <div className="md-500:w-[386px] max-[500px]:w-full flex items-center justify-start flex-col row-[1] col-[1] justify-self-center md-920:row-[2] lg-1150:row-[1] md-920:col-[1/4] lg-1150:col-[1/3] md-920:justify-self-start lg-1150:justify-self-end h-[950px] rounded-3xl box-shadow bg-[rgba(17,39,227,.08)]">
              <div className="space-y-7 mt-12 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
                <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
                  Free
                </h2>
                <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                  Everything you need to start teaching online
                </small>
                <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
                  $0
                  <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                    /month
                  </small>
                </h3>
                <Link
                  className="py-[20px] px-[40px] bg-transparent rounded-[8px] outline-none border border-brand-blue-100 text-brand-blue-100 font-semibold text-base leading-[18px] capitalize"
                  href="/login"
                >
                  Try for Free
                </Link>
              </div>
              <div className=" flex flex-col justify-start items-start w-full">
                <ul className="pricing-list px-[28px]">
                  <li>
                    <Icons.check />
                    5% transaction fee
                  </li>
                  <li>
                    <Icons.check />
                    Sell ebooks
                  </li>
                  <ul className="pl-7">
                    <li>• Unlimited ebooks</li>
                    <li>• Unlimited students per ebook</li>
                    <li>• Sales page for enrollments</li>
                  </ul>
                  <li>
                    <Icons.check />
                    Sell recorded courses
                  </li>
                  <ul className="pl-7">
                    <li>• Unlimited courses</li>
                    <li>• Unlimited students per course</li>
                    <li>• Sales page for enrolment</li>
                  </ul>
                  <li>
                    <Icons.check />
                    Accept payments online
                  </li>
                  <li>
                    <Icons.check />
                    Built-in chat room
                  </li>
                  <li>
                    <Icons.check />
                    Analytics & attendance tracking
                  </li>
                  <li>
                    <Icons.check />
                    Student dashboard
                  </li>
                </ul>
              </div>
            </div>

            <div className="md-500:w-[386px] max-[500px]:w-full flex items-center justify-start flex-col max-md-920:row-[2] row-[1] col-[1] md-920:col-[2/5] justify-self-center h-[990px] rounded-3xl box-shadow z-10 bg-white">
              <div className="space-y-7 mt-10 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
                <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
                  <Image
                    width={24}
                    height={24}
                    src="/images/landing-page/home-page/pro.svg"
                    alt="pro"
                  />
                  Pro
                </h2>
                <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                  Turn your Klas academy into a successful business
                </small>
                <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
                  $29
                  <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                    /mo
                  </small>
                </h3>
                <Link
                  className="py-5 px-[40px] bg-brand-blue-100 rounded-[8px] text-white font-semibold text-base leading-[18px] capitalize"
                  href="/login"
                >
                  Get Started
                </Link>
              </div>
              <div className=" flex flex-col justify-start items-start w-full">
                <small className="mb-[25px] mx-auto text-base leading-[18px] font-bold">
                  Everything in Free, including
                </small>
                <ul className="pricing-list px-[28px]">
                  <li>
                    <Icons.check />
                    3% transaction fee
                  </li>
                  <li>
                    <Icons.check />
                    Host unlimited classes
                  </li>
                  <ul className="pl-7">
                    <li>• Host up to 100 students per class</li>
                    <li>• Instant recording & cloud storage</li>
                    <li>• Time limit is 2 hours</li>
                  </ul>
                  <li>
                    <Icons.check />
                    Custom branding
                  </li>
                  <li>
                    <Icons.check />
                    Integrated email marketing
                  </li>
                  <li>
                    <Icons.check />5 admin & instructor seats
                  </li>
                  <li>
                    <Icons.check />
                    Team reports & analytics
                  </li>
                </ul>
              </div>
            </div>

            <div className="md-500:w-[386px] max-[500px]:w-full flex items-center justify-start flex-col row-[3] col-[1] justify-self-center md-920:row-[2] lg-1150:row-[1] md-920:col-[3/-1] lg-1150:col-[4/-1] md-920:justify-self-end lg-1150:justify-self-start h-[950px] rounded-3xl box-shadow bg-[rgba(17,39,227,.08)]">
              <div className="space-y-7 mt-12 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
                <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
                  Plus
                </h2>
                <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                  Take your Klas academy to the next level
                </small>
                <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
                  $99
                  <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                    /mo
                  </small>
                </h3>
                <Link
                  className="py-[20px] px-[40px] bg-transparent rounded-[8px] outline-none border border-brand-blue-100 text-brand-blue-100 font-semibold text-base leading-[18px] capitalize"
                  href="/login"
                >
                  Coming Soon
                </Link>
              </div>
              <div className=" flex flex-col justify-start items-start w-full">
                <small className="mb-[25px] mx-auto text-base leading-[18px] font-bold">
                  Everything in Pro, including
                </small>
                <ul className="pricing-list px-[28px]">
                  {PlusPerks.map((perk, index) => (
                    <li key={index}>
                      <Icons.check />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={PricingFAQ} />

      <CallToAction
        heading="Ready to start teaching?"
        paragraph="Use Klas to create and manage your online academy"
        buttonText="Sign up free"
      />
    </main>
  );
};

export default PricingPage;
