"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";

const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function onSubmit(values: z.infer<typeof LoginFormSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

export default function LoginForm() {
  const LoginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...LoginForm}>
      <form onSubmit={LoginForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={LoginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-5 text-lg font-medium">
                Email Address
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={LoginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-5 text-lg font-medium">
                Password
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormDescription className="text-sm opacity-0 text-muted-foreground">
                Password: At least 8 characters, alphanumeric, upper & lower
                case.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex text-[rgba(0,0,0,.5)] items-center justify-between font-sm">
          <span className="flex items-center whitespace-nowrap">
            Remember me
            <Input type="checkbox" className="ml-2" />
          </span>
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
        <div className="mt-[45px] flex items-center justify-center gap-10 flex-col">
          <Button
            className="px-8 w-[300px] h-[50px] flex items-center justify-center rounded-[8px] font-bold py-4 text-white btn-gradient"
            type="submit"
          >
            Continue
          </Button>
          <small className="text-sm text-[rgba(0,0,0,.5)]">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-brand-blue-100 font-medium">
              Sign Up
            </Link>
          </small>
        </div>
      </form>
    </Form>
  );
}
