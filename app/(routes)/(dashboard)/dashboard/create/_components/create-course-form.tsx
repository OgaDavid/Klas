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
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { CreateCourseFormSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import { ContentCategory } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateCourseForm() {
  const [loading, setLoading] = React.useState(false);

  const CreateCourseForm = useForm<z.infer<typeof CreateCourseFormSchema>>({
    resolver: zodResolver(CreateCourseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      topics: [""],
      madeFor: [""],
      faqs: [
        {
          question: "What is the course duration?",
          answer: "The course duration is 6 weeks."
        },
      ]
    },
  });

  const router = useRouter();

  const onSubmit = async (userData: z.infer<typeof CreateCourseFormSchema>) => {
    try {
      setLoading(true);

      console.log(userData);
    } catch (error: any) {
      toast.error(error);

      console.log(error);
    } finally {
      setLoading(false);
      CreateCourseForm.reset();
    }
  };

  return (
    <div className="max-md-800:mt-10 mt-[100px] mx-auto relative max-md-800:shadow-none shadow-lg bg-white max-md-800:pt-0 py-[50px] max-md-800:px-0 px-[70px] max-md-800:rounded-none rounded-[24px] max-w-[943px] flex items-center">
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
                <FormLabel className="mb-5 text-lg font-medium text-black">
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
                <FormLabel className="mb-5 text-lg font-medium text-black">
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
                <FormLabel className="mb-5 text-lg font-medium text-black">
                  Select Category
                  <span className="text-[#ff6868]"> *</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ContentCategory.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-5 text-lg font-medium text-black">
            Topics we will cover
            <span className="text-[#ff6868]"> *</span>
          </div>
          <AnimatePresence>
            {CreateCourseForm.watch("topics").map((_, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    height: { duration: 0.2 },
                  }}
                  key={index}
                >
                  <FormField
                    control={CreateCourseForm.control}
                    name={`topics.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div>
                            <X
                              onClick={() => {
                                CreateCourseForm.setValue(
                                  "topics",
                                  CreateCourseForm.watch("topics").filter(
                                    (item, i) => i !== index
                                  )
                                );
                              }}
                              className={`${
                                index === 0 ? "hidden" : ""
                              } my-[10px] w-4 h-4 cursor-pointer ml-auto mr-[10px]`}
                            />
                            <Input
                              placeholder="Tip: Highlight the main points you'll teach"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div
            onClick={() => {
              CreateCourseForm.setValue("topics", [
                ...CreateCourseForm.watch("topics"),
                "",
              ]);
            }}
            className="text-lg cursor-pointer text-[rgba(0,0,0,.5)]"
          >
            + Add another topic
          </div>
          <div className="mb-5 text-lg font-medium text-black">
            Who is this course for
            <span className="text-[#ff6868]"> *</span>
          </div>
          <AnimatePresence>
            {CreateCourseForm.watch("madeFor").map((_, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    height: { duration: 0.2 },
                  }}
                  key={index}
                >
                  <FormField
                    control={CreateCourseForm.control}
                    name={`madeFor.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div>
                            <X
                              onClick={() => {
                                CreateCourseForm.setValue(
                                  "madeFor",
                                  CreateCourseForm.watch("madeFor").filter(
                                    (item, i) => i !== index
                                  )
                                );
                              }}
                              className={`${
                                index === 0 ? "hidden" : ""
                              } my-[10px] w-4 h-4 cursor-pointer ml-auto mr-[10px]`}
                            />
                            <Input
                              placeholder="E.g Designers, Marketers"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
          {/* <div className="mb-5 text-lg font-medium text-black">
            Add a faqs section
            <span className="text-[#ff6868]"> *</span>
          </div>
          <AnimatePresence>
            {CreateCourseForm.watch("faqs").map((_, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    height: { duration: 0.2 },
                  }}
                  key={index}
                >
                  <FormField
                    control={CreateCourseForm.control}
                    name={`faqs.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div>
                            <X
                              onClick={() => {
                                CreateCourseForm.setValue(
                                  "faqs",
                                  CreateCourseForm.watch("faqs").filter(
                                    (item, i) => i !== index
                                  )
                                );
                              }}
                              className={`${
                                index === 0 ? "hidden" : ""
                              } my-[10px] w-4 h-4 cursor-pointer ml-auto mr-[10px]`}
                            />
                            <Input
                              placeholder="E.g Designers, Marketers"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div
            onClick={() => {
              CreateCourseForm.setValue("madeFor", [
                ...CreateCourseForm.watch("madeFor"),
                "",
              ]);
            }}
            className="text-lg cursor-pointer text-[rgba(0,0,0,.5)]"
          >
            + Add another person
          </div> */}
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
