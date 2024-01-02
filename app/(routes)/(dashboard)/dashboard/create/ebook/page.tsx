import React from 'react'
import { Metadata } from 'next'
import CreateLayoutContainer from '../_components/create-layout'
import CreateEbookForm from '../_components/create-ebook-form'

export const metadata: Metadata = {
  title: {
    default: "Create an Ebook",
    template: "Create an Ebook",
  },
}

const CreateEbookPage = () => {
  return (
    <CreateLayoutContainer>
      <CreateEbookForm />
    </CreateLayoutContainer>
  )
}

export default CreateEbookPage