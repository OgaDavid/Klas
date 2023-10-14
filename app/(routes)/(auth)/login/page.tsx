import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="px-[30px] py-10 grid place-items-center">
      <div className="w-full max-w-[550px]">
        <span className="items-center">
          <h3 className="font-bold mb-10 text-[32px] leading-[42px] text-brand-blue-100">
            Sign In
          </h3>
        </span>
        <LoginForm />
      </div>
    </div>
  );
}
