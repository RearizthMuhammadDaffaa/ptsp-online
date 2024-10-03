import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-white max-w-screen-xl max-auto shadow-lg mt-3 w-full rounded-3xl border-2 p-10 '>
      <div className='w-full flex flex-col gap-5'>
        {children}
      </div>
    </div>
  )
}

export default Layout