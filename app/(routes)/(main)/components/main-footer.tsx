import React from "react";
import Link from "next/link";
import { Icons } from "../../../../components/icons";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";

const MainFooter = () => {
  return (
    <footer className="bg-brand-blue-200">
      <div className="container">
        <div className="py-10 sm:p-10 w-[85%] mx-auto">
          <div className="flex justify-between">
            <Link href="/">
              <Icons.logo_footer />
            </Link>
            <ul className="flex items-center justify-center space-x-[2.5rem]">
              <li>
                <Link
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.instagram />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.twitter />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.linkedin />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <nav className="mt-[45px] mb-[28px] flex items-center justify-center">
              <ul className="flex gap-[19px] justify-center flex-wrap">
                {docsConfig.footerNav.map(({ title, href }) => (
                  <li key={title}>
                    <Link className="footer_navlink" href={href}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="text-sm font-normal text-[hsla(0,0%,100%,.5)] text-center">
            © Klas Global, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
