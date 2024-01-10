"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { LoginFormSchema } from "@/schemas";

export default function LoginForm() {
  const LoginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const onSubmit = async (userLoginData: z.infer<typeof LoginFormSchema>) => {

    try {
      setLoading(true);

      const res = await signIn('credentials', {
        email: userLoginData.email,
        password: userLoginData.password,
        redirect: false
      })

      console.log(res);

      if (res?.error) {
        toast.error('Something went wrong. Please try again later. 🤒');
        LoginForm.reset();
      }

     if (res?.ok && res?.status === 200) {
        toast.success("User Signed in Successfully 🎊")

        router.push("/dashboard");
      }

    } catch (error: any) {
      toast.error(error.message);
    }
    finally {
      setLoading(false);
    }

  }
  return (
    <Form {...LoginForm}>
      <form onSubmit={LoginForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={LoginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`mb-5 text-lg font-medium ${
                  LoginForm.formState.errors.email && "text-black"
                }`}>
                Email Address
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Enter your email address" {...field} />
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
              <FormLabel className={`mb-5 text-lg font-medium ${
                  LoginForm.formState.errors.password && "text-black"
                }`}>
                Password
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Enter your password" {...field} />
              </FormControl>
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
            disabled={loading}
            className="px-8 w-[300px] gap-2 h-[50px] flex items-center justify-center rounded-[8px] font-bold py-4 text-white btn-gradient"
            type="submit"
          >
            {loading ? <Loader2 width={16} height={16} className="animate-spin text-white" /> : "Continue"}
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
