import { docsConfig } from "@/config/docs";
import Link from "next/link";
import React from "react";

export default function MainNav() {
  return (
    <nav className="max-md-800:hidden">
      <ul className="flex transition-all duration-300 gap-[10px] min-[1150px]:gap-[30px]">
        {docsConfig.mainNav.map(({ title, href }) => (
          <li key={title}>
            <Link className="navlink" href={href}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
