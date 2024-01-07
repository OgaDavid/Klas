import React from 'react'
import { Metadata } from 'next'
import CreateLayoutContainer from '../_components/create-layout'
import CreateCourseForm from '../_components/create-course-form'

export const metadata: Metadata = {
  title: {
    default: "Create a new lesson",
    template: "Create a new lesson",
  },
}

const CreateLessonPage = () => {
  return (
    <CreateLayoutContainer>
      {/* <Image src={} alt='' width={} height={}/> */}
      <CreateCourseForm />
    </CreateLayoutContainer>
  )
}

export default CreateLessonPage