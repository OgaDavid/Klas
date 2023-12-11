import React from "react";
import { CaseStudiesData } from "@/data/data";
import CaseStudyCard from "@/components/case-study-card";
import PageHeaders from "@/components/page-headers";
import Image from "next/image";

const CaseStudiesPage = () => {
  return (
    <main>
      <PageHeaders
        textColor="black"
        paragraph="See how top communities, online schools, and brands globally are using Klas to power live learning for their students."
        text="Customer Case Studies"
      />

      <section className="pb-[120px] max-md:pb-[100px]">
        <div className="flex items-center justify-between max-[620px]:gap-[20px] max-[620px]:justify-center max-[620px]:flex-wrap gap-[25px] mt-[80px] mx-auto max-w-[700px]">
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <Image
              width={143}
              height={43}
              src="/images/landing-page/case-study/designpal-dark.svg"
              alt="design pal - useCases"
            />
          </div>
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <Image
              width={127}
              height={39}
              src="/images/landing-page/case-study/dev-career-dark.svg"
              alt="dev career - useCases"
            />
          </div>
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <Image
              width={127}
              height={36}
              src="/images/landing-page/case-study/ai-school-dark.svg"
              alt="ai school - useCases"
            />
          </div>
        </div>
      </section>

      <section className="py-[120px] max-md:py-[80px]">
        <div className="grid max-md:grid-cols-1 mx-auto md:grid-cols-2 md-920:grid-cols-3 max-md:px-[20px] px-[40px] max-w-[1300px] gap-[40px]">
          {CaseStudiesData.map((data, idx) => (
            <div key={idx}>
              <CaseStudyCard data={data} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
