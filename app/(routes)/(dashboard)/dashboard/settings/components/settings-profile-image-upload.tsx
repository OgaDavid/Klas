import React from "react";

const ProfileImageUpload = () => {
  return (
    <div className="mb-[30px] flex items-center gap-4 pl-[10px]">
      <div className="w-20 h-20 cursor-pointer rounded-full grid place-items-center overflow-hidden relative bg-no-repeat ">
        <input type="file" multiple accept="/image/*" />
      </div>
      <p>Upload your profile photo</p>
    </div>
  );
};

export default ProfileImageUpload;
