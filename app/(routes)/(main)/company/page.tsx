"use client";

import React from "react";
import CountUp from "react-countup";
import { FAQ } from "@/components/faq";
import { CompanyFAQ } from "@/data/data";
import PageHeaders from "@/components/page-headers";
import Image from "next/image";

const CompanyPage = () => {
  return (
    <main>
      <PageHeaders
        sm={true}
        pb={true}
        textColor="black"
        paragraph="Launched in 2022, Klas is on a mission to empower everyone to teach engaging online classes."
        text="Empowering everyone to teach online"
      />

      <section>
        <div>
          <div className="grid place-items-center max-md:h-[300px] max-md:w-full overflow-hidden mx-auto min-[768px]:w-[1250px]-hidden relative">
            <div className="flex max-md:grid max-md:place-items-center max-md:absolute max-md:gap-[10px] max-md:w-[630px] max-md:grid-cols-3 items-center justify-between mx-auto w-[1250px]">
              <div className="max-md:w-[200px] overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={402}
                  height={600}
                  src="images/d1.svg"
                  alt="metrics images"
                />
              </div>
              <div className="max-md:w-[200px] overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={402}
                  height={600}
                  src="images/d2.svg"
                  alt="metrics images"
                />
              </div>
              <div className="max-md:w-[200px] overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={402}
                  height={600}
                  src="images/d3.svg"
                  alt="metrics images"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mx-auto max-md:flex-wrap max-md:px-[20px] justify-between max-md:py-[40px] px-[40px] py-[80px] max-w-[950px]">
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                2022
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Launched
              </p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={85000} duration={2} enableScrollSpy={true} />+
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Learners worldwide
              </p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={1200} duration={2} enableScrollSpy={true} />+
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Active online schools
              </p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={27} duration={2} enableScrollSpy={true} />
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Countriess reached
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[80px] pb-[130px]">
        <div className="flex flex-col items-center justify-center px-[40px] max-md:px-[20px]">
          <div className="max-w-[825px] text-center max-md:mb-[40px] mb-[80px]">
            <h2 className="font-semibold text-[48px] leading-[53px] text-center max-md:text-[32px] max-md:leading-[35px]">
              We look forward to a future where learning is even more
            </h2>
          </div>
          <div className="flex items-center justify-center gap-[25px] flex-wrap">
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={295}
                  height={400}
                  src="/images/c1.svg"
                  alt="culture @ klas"
                />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Fun
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={295}
                  height={400}
                  src="/images/c2.svg"
                  alt="culture @ klas"
                />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Collaborative
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={295}
                  height={400}
                  src="/images/c3.svg"
                  alt="culture @ klas"
                />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Borderless
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <Image
                  width={295}
                  height={400}
                  src="/images/c4.svg"
                  alt="culture @ klas"
                />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Community-driven
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={CompanyFAQ} />

      <section className="pt-[50px] pb-[160px]">
        <div className="max-w-[1366px] px-[40px] mx-auto ">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-center text-[48px] leading-[53px] mb-[80px] max-md:text-[32px] max-md:leading-[38px]">
              As featured in
            </h2>
            <div className="flex items-center justify-center flex-wrap gap-[80px]">
              <div>
                <Image
                  width={186}
                  height={41}
                  src="/images/techcabal.svg"
                  alt="TechCabal"
                  className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
              <div>
                <Image
                  width={211}
                  height={30}
                  src="/images/nairametrics.svg"
                  alt="NairaMetrics"
                  className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
              <div>
                <Image
                  width={233}
                  height={72}
                  src="/images/edtech.svg"
                  alt="EdTech Review"
                  className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
              <div>
                <Image
                  width={145}
                  height={97}
                  src="/images/disrupt.svg"
                  alt="disrupt"
                  className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
              <div>
                <Image
                  width={49}
                  height={56}
                  src="/images/db.svg"
                  alt="DB"
                  className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
