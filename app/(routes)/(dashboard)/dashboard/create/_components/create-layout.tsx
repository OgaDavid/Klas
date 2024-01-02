import React from 'react'

const CreateLayoutContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-[#f6f7ff] py-10 px-[50px] mx-auto'>
        {children}
    </div>
  )
}

export default CreateLayoutContainer