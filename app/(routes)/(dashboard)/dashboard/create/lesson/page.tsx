import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Create a new lesson",
    template: "Create a new lesson",
  },
}

const CreateLessonPage = () => {
  return (
    <div>CreateLessonPage</div>
  )
}

export default CreateLessonPage