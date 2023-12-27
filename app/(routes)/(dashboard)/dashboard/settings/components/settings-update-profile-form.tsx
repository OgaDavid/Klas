"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from 'react-hook-form';

const UpdateProfileFormSchema = z.object({
    name: z.string().min(2, {
        message: "Full name must be at least 3 characters.",
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


const UpdateProfile = () => {
    const UpdateProfileForm = useForm<z.infer<typeof UpdateProfileFormSchema>>({
        resolver: zodResolver(UpdateProfileFormSchema),
        defaultValues: {
          name: "",
          username: "",
          phoneNumber: "",
          about: "",
        },
      });
    
  return (
    <div>UpdateProfile</div>
  )
}

export default UpdateProfile