import React from 'react'
import { Metadata } from 'next'
import CreateLayoutContainer from '../_components/create-layout'
import CreateCourseForm from '../_components/create-course-form'
import Image from 'next/image'

export const metadata: Metadata = {
  title: {
    default: "Create a new lesson",
    template: "Create a new lesson",
  },
}

const CreateLessonPage = () => {
  return (
    <CreateLayoutContainer>
      <Image className='absolute top-[150px] -left-8 w-[350px] h-[290px]' src="/images/dashboard/create/create-form-illustration-one.png" alt='illustration' width={274} height={272}/>
      <CreateCourseForm />
      <Image className='absolute top-[600px] right-0 w-[212px] h-[248px]' src="/images/dashboard/create/create-form-illustration-two.png" alt='illustration' width={212} height={248}/>
    </CreateLayoutContainer>
  )
}

export default CreateLessonPage