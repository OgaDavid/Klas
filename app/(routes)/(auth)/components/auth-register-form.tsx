"use client";

import React from "react";

import axios from 'axios';
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
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { RegisterFormSchema } from "@/schemas";

export default function RegisterForm() {

  const [loading, setLoading] = React.useState(false);

  const RegisterForm = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (userData: z.infer<typeof RegisterFormSchema>) => {
    try {
      setLoading(true);

      const response = await axios.post('/api/auth/register-user', userData);

      toast.info("User Created Successfully 🎉");

      router.push("/login");
      
    } catch (error : any) {
      toast.error(error.request.response)

      console.log(error)
    }
    finally {
      setLoading(false)
      RegisterForm.reset();
    }
  }

  return (
    <Form {...RegisterForm}>
      <form
        onSubmit={RegisterForm.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={RegisterForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={`mb-5 text-lg font-medium ${
                  RegisterForm.formState.errors.name && "text-black"
                }`}
              >
                Full Name
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  className={`${
                    RegisterForm.formState.errors.name &&
                    "border-destructive"
                  }`}
                  placeholder="Enter your full name"
                  {...field}
                />
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
              <FormLabel
                className={`mb-5 text-lg font-medium ${
                  RegisterForm.formState.errors.email && "text-black"
                }`}
              >
                Email Address
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  className={`${
                    RegisterForm.formState.errors.email && "border-destructive"
                  }`}
                  placeholder="Enter your email address"
                  {...field}
                />
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
              <FormLabel
                className={`mb-5 text-lg font-medium ${
                  RegisterForm.formState.errors.phoneNumber && "text-black"
                }`}
              >
                Phone Number
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  className={`${
                    RegisterForm.formState.errors.phoneNumber &&
                    "border-destructive"
                  }`}
                  placeholder="Enter your phone number"
                  {...field}
                />
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
              <FormLabel
                className={`mb-5 text-lg font-medium ${
                  RegisterForm.formState.errors.password && "text-black"
                }`}
              >
                Password
                <span className="text-[#ff6868]"> *</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  className={`${
                    RegisterForm.formState.errors.password &&
                    "border-destructive"
                  }`}
                  placeholder="Enter your password"
                  {...field}
                />
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
            disabled={loading}
            className="px-8 w-[300px] gap-2 h-[50px] flex items-center justify-center rounded-[8px] font-bold py-4 text-white btn-gradient"
            type="submit"
          >
            {loading ? <Loader2 width={16} height={16} className="animate-spin text-white" />: "Continue"}
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
