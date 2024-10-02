import React from 'react'
import { dataVideo } from '../../utils/data'
const Video = () => {
  return (
    <div className='grid  grid-cols-2 gap-9 max-w-full mx-auto'>
      {dataVideo.map((data,i)=>(
        <a key={i} href="https://www.youtube.com/watch?v=1tPpbaT3nvE" target='_blank' className=' bg-red-100 mx-auto  block z-1 lg:w-[516px]'>
          
          <iframe src={data.link}   title="YouTube Video"
         
          className='lg:w-full lg:p-0 p-3 lg:h-[256px] w-full h-[200px]'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        </a>
      ))}
    </div>
  )
}

export default Video