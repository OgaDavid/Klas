import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klas: Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center max-md:mt-20 flex-col p-10">
      <Image
        className="max-w-[700px] w-full"
        src="/images/404.png"
        alt="404"
        width={2130}
        height={866}
      />
      <div className="text-center mb-20">
        <h1 className="text-[32px] leading-[52px] font-bold">
          Sorry page not found
        </h1>
        <p className="text-[rgba(0,0,0,.5)] text-center">
          We suggest you go back to home
        </p>
      </div>
      <Link href={siteConfig.url}>
        <Button
          className="px-8 py-4 h-[50px] w-[225px] hover:text-white hover:bg-gradient-to-r hover:from-brand-blue-100 hover:to-brand-purple-100 font-bold"
          variant="outline"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
