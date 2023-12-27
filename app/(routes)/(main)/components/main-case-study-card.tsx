import Image from "next/image";
import React from "react";

interface CaseStudyCardProps {
  data: {
    imageSrc: string;
    overlayImg: string;
    companyName: string;
    link: string;
    about: string;
    category: string;
  };
}

const CaseStudyCard = ({ data }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-[24px] h-[461px] case-study-card overflow-hidden flex flex-col pb-[24px]">
      <div className="relative scale-image overflow-hidden">
        <Image
          width={380}
          height={170}
          className="w-full"
          src={data.imageSrc}
          alt={data.companyName}
        />
        <div className="absolute top-0 left-0 grid place-items-center bg-[rgba(0,0,0,.5)] w-full h-full">
          <Image
            width={119}
            height={39}
            src={data.overlayImg}
            alt={data.companyName}
          />
        </div>
      </div>
      <div className="px-[29px] flex flex-col">
        <h3 className="font-bold mt-[40px] mb-[20px] text-[16px] leading-[18px]">
          {data.companyName}
        </h3>
        <a
          className="text-[14px] underline leading-[15px] text-[rgba(0,0,0,.7)] font-[400]"
          href={data.link}
        >
          {data.link}
        </a>
        <p className="text-[16px] leading-[18px] mt-[40px] font-[400]">
          {data.about}
        </p>
      </div>
      <p className="font-[600] text-[16px] leading-[18px] mt-[50px] pl-[29px]">
        {data.category}
      </p>
    </div>
  );
};

export default CaseStudyCard;
