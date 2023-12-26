import Image from "next/image";
import React from "react";

const UserAvatar = ({ imageUrl }: { imageUrl: string | null | undefined }) => {
  return (
    <Image
      className="rounded-full "
      src={imageUrl || "/images/dashboard/avatar-fallback.png"}
      alt="user's image"
      width={36}
      height={36}
    />
  );
};

export default UserAvatar;
