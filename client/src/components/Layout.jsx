import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-white lg:max-w-screen-xl p-3 w-[90%] max-auto shadow-lg mt-3 lg:w-full rounded-3xl border-2 p-10 '>
      <div className='w-full flex flex-col gap-5'>
        {children}
      </div>
    </div>
  )
}

export default Layout