import React from 'react'
import CreateContentProgressIndicator from './create-content-progress-indicator'

const CreateLayoutContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-[#f6f7ff] py-10 px-[50px] mx-auto'>
        <CreateContentProgressIndicator />
        {children}
    </div>
  )
}

export default CreateLayoutContainer