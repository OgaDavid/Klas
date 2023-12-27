"use client";

import Link from "next/link";
import { useState } from "react";
import { docsConfig } from "@/config/docs";
import { Icons } from "../../../../components/icons";
import MainNav from "./main-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="header absolute-center container z-20">
        <header className="z-50">
          <div className="py-3 shadow-md px-7 md-800:px-10 bg-white rounded-[8px] border border-[#00000014] flex justify-between w-full items-center">
            <span>
              <Link href="/">
                <Icons.logo_main className="max-md-800:hidden" />
                <Icons.logo_mobile className="md-800:hidden" />
              </Link>
              <span className="sr-only">Klas</span>
            </span>
            <MainNav />
            <div className="flex max-md-800:hidden gap-[10px] transition-all duration-300 lg-1150:gap-8 items-center">
              <Link
                className="text-sm lg-1150:text-base text-brand-blue-100 font-semibold"
                href="/onboard"
              >
                Login
              </Link>
              <Link
                className="text-sm lg-1150:text-base font-medium text-white bg-brand-blue-200 py-4 px-8 rounded-[8px]"
                href="/onboard"
              >
                Sign up free
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md-800:hidden cursor-pointer"
            >
              {!isOpen ? (
                <span>
                  <Icons.hamburger />
                  <span className="sr-only">Menu</span>
                </span>
              ) : (
                <span>
                  <Icons.hamburger_close />
                  <span className="sr-only">Close Menu</span>
                </span>
              )}
            </button>
          </div>
        </header>
      </div>

      {isOpen && (
        <nav className="h-screen md-800:hidden fixed_center z-10 bg-white w-full">
          <div className="absolute-center mt-[150px] top-60">
            <ul className="flex-col text-center space-y-7 items-center justify-center transition-all duration-300 ">
              {docsConfig.mainNav.map(({ title, href }) => (
                <li onClick={() => setIsOpen(false)} className="" key={title}>
                  <Link
                    className={cn(
                      "text-lg font-semibold p-1 hover:text-brand-blue-100 transition-all duration-300",
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
            <div className=" flex mt-20 flex-col gap-[20px] transition-all duration-300 lg:gap-8 items-center">
              <Link
                className="text-lg text-brand-blue-100 font-medium"
                href="/onboard"
              >
                Login
              </Link>
              <Link
                className="text-lg font-medium text-white bg-brand-blue-200 py-4 px-[35px] rounded-[8px]"
                href="/onboard"
              >
                Sign up free
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default MainHeader;
