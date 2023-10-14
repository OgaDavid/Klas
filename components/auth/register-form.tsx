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

const RegisterFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

export default function RegisterForm() {
  const RegisterForm = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });
  return (
    <Form {...RegisterForm}>
      <form
        onSubmit={RegisterForm.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={RegisterForm.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-5 text-lg font-medium">
                Full Name
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={RegisterForm.control}
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
          control={RegisterForm.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-5 text-lg font-medium">
                Phone Number
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={RegisterForm.control}
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
              <FormDescription className="text-sm text-muted-foreground">
                Password: At least 8 characters, alphanumeric, upper & lower
                case.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-[45px] flex items-center justify-center gap-10 flex-col">
          <Button
            className="px-8 w-[300px] h-[50px] flex items-center justify-center rounded-[8px] font-bold py-4 text-white btn-gradient"
            type="submit"
          >
            Continue
          </Button>
          <small className="text-sm text-[rgba(0,0,0,.5)]">
            Already have an account?{" "}
            <Link href="/login" className="text-brand-blue-100 font-medium">
              Sign In
            </Link>
          </small>
        </div>
      </form>
    </Form>
  );
}
