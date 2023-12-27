import React from "react";
import { Icons } from "../../../../../../components/icons";

const SettingsHeader = () => {
  return (
    <div className="mb-[30px] flex items-center gap-4 w-full">
      <button>
        <Icons.back_icon />
      </button>
      <h3 className="text-brand-blue-100 text-2xl font-bold">Your Profile</h3>
    </div>
  );
};

export default SettingsHeader;
