import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserAvatar = ({ imageUrl }: { imageUrl: string | null | undefined }) => {
  return (
    <Link href="/dashboard/settings">
      <Image
        className="rounded-full "
        src={imageUrl || "/images/dashboard/avatar-fallback.png"}
        alt="user's image"
        width={40}
        height={40}
      />
    </Link>
  );
};

export default UserAvatar;
