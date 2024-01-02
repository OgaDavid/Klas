import React from "react";
import { Metadata } from "next";
import RegisterForm from "@/app/(routes)/(auth)/_components/auth-register-form";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="px-[30px] py-10 grid place-items-center">
        <div className="w-full max-w-[550px]">
          <span className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-[32px] leading-[42px] text-brand-blue-100">
              Sign up
            </h3>
            <p>1/2</p>
          </span>
          <RegisterForm />
        </div>
    </div>
  );
}
