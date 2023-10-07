import { docsConfig } from "@/config/docs";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="max-md-800:hidden">
      <ul className="flex transition-all duration-300 gap-[10px] min-[1150px]:gap-[30px]">
        {docsConfig.mainNav.map(({ title, href }) => (
          <li key={title}>
            <Link
              className={cn(
                "navlink",
                pathname === href
                  ? "text-brand-blue-100"
                  : "text-brand-gray-100"
              )}
              href={href}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
