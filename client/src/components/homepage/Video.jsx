import React, { useEffect, useState } from 'react'
// import { dataVideo } from '../../utils/data'
import axios from 'axios';
const Video = () => {
  const [dataVideo,setDataVideo] = useState([]);
  const getDataVideo = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}video`);
      setDataVideo(response.data);
      console.log(dataVideo);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=> {
    getDataVideo();
  },[])

  return (
    <div className='grid  grid-cols-2  lg:gap-9 gap:3 max-w-full mx-auto'>
      {dataVideo.map((data,i)=>(
        <a key={i} href={data.url} target='_blank' className='  mx-auto  block z-1 lg:w-[516px]'>
          
          <iframe src={`https://www.youtube.com/embed/${data.link_id}`}   title="YouTube Video"
         
          className='lg:w-full lg:p-0 p-3 lg:h-[256px] w-full h-[200px]'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        </a>
      ))}
    </div>
  )
}

export default Video