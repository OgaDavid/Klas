import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

export default function WelcomePage() {
  return (
    <section className="md-920:h-screen px-6 md-920:grid md-920:place-items-center">
      <div className="max-w-[550px] max-md-920:mt-[100px]">
        <div className="mb-10">
          <h3 className="font-bold text-[32px] text-brand-blue-100">
            Get started with Klas
          </h3>
          <p className="text-lg font-normal text-[rgba(0,0,0,.5)]">
            Sign up to discover the full power of Klas.
          </p>
        </div>
        <ul className="flex flex-col mb-[60px] items-start gap-6">
          <li className="flex items-baseline gap-[10px]">
            <Icons.check_black />
            <p className="text-lg font-normal">Launch your virtual academy</p>
          </li>
          <li className="flex items-baseline gap-[10px]">
            <Icons.check_black />
            <p className="text-lg font-normal">Host engaging classes with ease</p>
          </li>
          <li className="flex items-baseline gap-[10px]">
            <Icons.check_black />
            <p className="text-lg font-normal">No teaching experience? No problem!</p>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-6">
            <Link href="/login">
                <button className="px-8 w-[300px] h-[50px] flex items-center justify-center login-btn rounded-[8px] font-bold py-4 text-brand-blue-100 border-brand-blue-100 border bg-white">Login</button>
            </Link>
            <Link href="/register">
                <button className="px-8 w-[300px] h-[50px] flex items-center justify-center rounded-[8px] font-bold py-4 text-white btn-gradient">Create an account</button>
            </Link>
        </div>
      </div>
    </section>
  );
}
