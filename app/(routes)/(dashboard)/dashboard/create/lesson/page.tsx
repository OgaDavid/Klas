import React from 'react'
import { Metadata } from 'next'
import CreateLayoutContainer from '../_components/create-layout'
import CreateLessonForm from '../_components/create-lesson-form'

export const metadata: Metadata = {
  title: {
    default: "Create a new lesson",
    template: "Create a new lesson",
  },
}

const CreateLessonPage = () => {
  return (
    <CreateLayoutContainer>
      <CreateLessonForm />
    </CreateLayoutContainer>
  )
}

export default CreateLessonPage