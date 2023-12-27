import React from "react";
import CountUp from "react-countup";
import { CompaniesImages as images } from "@/data/data";

export default function Stats() {
  return (
    <section>
      <div className="container">
        <div className="mb-[160px]">
          <div className="flex text-left max-md:items-center max-md:justify-center max-md:text-center flex-wrap justify-between max-w-[1030px] mx-auto mb-[80px]">
            <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
              <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
              <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">
                <CountUp end={125000} duration={2} enableScrollSpy={true} />+
              </h3>
              <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">
                Students globally
              </p>
            </div>
            <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
              <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
              <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">
                <CountUp end={2200} duration={2} enableScrollSpy={true} />+
              </h3>
              <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">
                Online academies
              </p>
            </div>
            <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
              <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
              <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">
                <CountUp end={27} duration={2} enableScrollSpy={true} />
              </h3>
              <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">
                Countries reached
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center min-[1150]:justify-between gap-[40px] flex-wrap">
            {images.map(({ name, url }) => (
              <img key={name} alt={name} src={url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
