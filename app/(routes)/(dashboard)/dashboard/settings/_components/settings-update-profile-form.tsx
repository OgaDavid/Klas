"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';

const UpdateProfileFormSchema = z.object({
    name: z.string().min(2, {
        message: "Full name must be at least 3 characters.",
      }),
    jobTitle: z.string().min(2, {
        message: "Job title must be at least 3 characters.",
      }),
      username: z.string().min(2, {
        message: "Username must be at least 3 characters.",
      }),
      phoneNumber: z.string().min(10, {
        message: "Phone number must be at least 10 characters.",
      }),
      about: z.string().min(10, {
        message: "About must be at least 10 characters.",
      }),
})


const SettingsUpdateProfile = () => {

  const [loading, setLoading] = React.useState(false);


    const UpdateProfileForm = useForm<z.infer<typeof UpdateProfileFormSchema>>({
        resolver: zodResolver(UpdateProfileFormSchema),
        defaultValues: {
          name: "",
          username: "",
          phoneNumber: "",
          about: "",
        },
      });

      const router = useRouter();

  const onSubmit = async (userData: z.infer<typeof UpdateProfileFormSchema>) => {
    try {
      setLoading(true);

    } catch (error : any) {
    
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
    
  return (
    <Form {...UpdateProfileForm}>
      <form
        onSubmit={UpdateProfileForm.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className='grid grid-cols-2 gap-6'>
        <FormField
          control={UpdateProfileForm.control}
          name="name"
          render={({ field }) => (
            <FormItem className='w-[350px]'>
              <FormControl>
                <Input
                  required
                  disabled={loading}
                  className="text-sm px-5 py-4"
                  placeholder="Enter your full name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={UpdateProfileForm.control}
          name="username"
          render={({ field }) => (
            <FormItem className='w-[350px]'>
              <FormControl>
                <Input
                  required
                  disabled={loading}
                  className="text-sm px-5 py-4"
                  placeholder="Enter your username"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={UpdateProfileForm.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem className='w-[350px]'>
              <FormControl>
                <Input
                  required
                  disabled={loading}
                  className="text-sm px-5 py-4"
                  placeholder="Job Title"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={UpdateProfileForm.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className='w-[350px]'>
              <FormControl>
                <Input
                  required
                  disabled={loading}
                  className="text-sm px-5 py-4"
                  placeholder="Enter your phone number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={UpdateProfileForm.control}
          name="about"
          render={({ field }) => (
            <FormItem className='w-[350px]'>
              <FormControl>
                <Textarea
                  disabled={loading}
                  className="text-sm px-5 py-4"
                  placeholder="Write about yourself in one or two sentences"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        </div>
          <Button
            disabled={loading}
            className="px-8 py-6 gap-2 w-[173px] flex items-center justify-center rounded-[8px] font-bold text-white btn-gradient"
            type="submit"
          >
            {loading ? <Loader2 width={16} height={16} className="animate-spin text-white" />: "Update Profile"}
          </Button>
      </form>
    </Form>
  )
}

export default SettingsUpdateProfile