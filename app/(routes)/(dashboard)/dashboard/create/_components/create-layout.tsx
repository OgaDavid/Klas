import React from 'react'
import CreateContentProgressIndicator from './create-content-progress-indicator'

const CreateLayoutContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-[#f6f7ff] max-md-800:bg-white py-10 max-md-800:px-5 px-[50px] mx-auto'>
        <CreateContentProgressIndicator />
        {children}
    </div>
  )
}

export default CreateLayoutContainer