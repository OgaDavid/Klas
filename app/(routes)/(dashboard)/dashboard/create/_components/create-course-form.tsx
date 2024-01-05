"use client";

import React from "react";

import axios from "axios";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CreateCourseFormSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import { ContentCategory } from "@/data/data";

export default function CreateCourseForm() {
  const [loading, setLoading] = React.useState(false);

  const CreateCourseForm = useForm<z.infer<typeof CreateCourseFormSchema>>({
    resolver: zodResolver(CreateCourseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      // topics: [""],
      // madeFor: [""]
    },
  });

  const router = useRouter();

  const onSubmit = async (userData: z.infer<typeof CreateCourseFormSchema>) => {
    try {
      setLoading(true);

      console.log(userData)

      
    } catch (error: any) {
      toast.error(error);

      console.log(error);
    } finally {
      setLoading(false);
      CreateCourseForm.reset();
    }
  };

  return (
    <div className="mt-[100px] mx-auto box-shadow-two bg-white py-[50px] px-[70px] rounded-[24px] max-w-[943px] flex items-center">
      <Form {...CreateCourseForm}>
        <form
          onSubmit={CreateCourseForm.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={CreateCourseForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="mb-5 text-lg font-medium text-black"
                >
                  Course Title
                  <span className="text-[#ff6868]"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    className={`${
                      CreateCourseForm.formState.errors.title &&
                      "border-destructive"
                    }`}
                    placeholder="Tip: Keep it short & catchy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={CreateCourseForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="mb-5 text-lg font-medium text-black"
                >
                  Course Description
                  <span className="text-[#ff6868]"> *</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    className="py-4 px-5"
                    placeholder="Describe your Course in 150 characters or less."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={CreateCourseForm.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="mb-5 text-lg font-medium text-black"
                >
                  Select Category
                  <span className="text-[#ff6868]"> *</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {ContentCategory.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-[45px] flex items-center justify-center gap-10 flex-col">
            <Button
              disabled={loading || !CreateCourseForm.formState.isValid}
              className="px-8 w-[300px] gap-2 h-[50px] flex items-center justify-center rounded-[8px] font-bold py-4 text-white btn-gradient"
              type="submit"
            >
              {loading ? (
                <Loader2
                  width={16}
                  height={16}
                  className="animate-spin text-white"
                />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
