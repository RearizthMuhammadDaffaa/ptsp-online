import React from 'react'

const TitleHome = ({title,subTitle}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full my-5 py-5'>
      <h1 className='text-center font-bold lg:text-lg text-sm leading-7 '>{title}</h1>
      <p className='text-sm text-center leading-6'>{subTitle}</p>
    </div>
  )
}

export default TitleHome