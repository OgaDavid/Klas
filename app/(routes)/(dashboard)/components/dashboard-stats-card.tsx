import Image from "next/image";
import React from "react";

const StatCard = ({ stat }: { stat: DashboardStat }) => {
  return (
    <div className="flex dashboard-stats-shadow items-center bg-white rounded-[16px] p-8 gap-7">
      <div>
        <div className="bg-brand-blue-100 rounded-full w-[70px] h-[70px] flex items-center justify-center">
          <Image src={stat.icon} alt={stat.title} width={30} height={30} />
        </div>
      </div>
      <div className="">
        <p className="text-lg">{stat.title}</p>
        <h4 className="font-bold text-[32px]">0</h4>
      </div>
    </div>
  );
};

export default StatCard;
