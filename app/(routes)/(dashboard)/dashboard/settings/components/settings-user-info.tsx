import React from "react";
import UserAvatar from "../../../components/dashboard-avatar";
import { Session } from "next-auth";

const SidebarUserInfo = ({ session }: { session: Session | null }) => {
  return (
    <div className="flex gap-4 py-[30px] px-4 border-b border-[rgba(0,0,0,.08)]">
      <UserAvatar imageUrl={session?.user?.image || ""} />
      <div>
      <h3 className="font-medium">{session?.user?.name}</h3>
      <p className="text-sm clip-user-email text-[rgba(0,0,0,.5)]">{session?.user?.email}</p>
      </div>
    </div>
  );
};

export default SidebarUserInfo;
