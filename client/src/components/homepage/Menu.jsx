import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataMenu } from '../../utils/data'
import axios from 'axios';
const Menu = () => {
  const [menu,setMenu] = useState([]);
  const getDataMenu = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}menu`);
      setMenu(response.data);
      console.log(dataVideo);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=> {
    getDataMenu();
  },[])
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 gap-3 max-w-full mx-auto justify-items-center p-3'>
      {dataMenu.map((data,i)=>(
      <Link to={data.link}  key={i} 
      className='
      lg:w-[256px] 
      lg:h-[256px] 
      w-[170px] 
      h-[170px] 
      bg-white 
      shadow-lg 
      rounded-3xl 
      overflow-hidden 
      flex 
      flex-col 
      items-center 
      justify-center p-2
      hover:bg-green-primary
      hover:text-white transition ease-in-out delay-150'>
        <img src={data.img} alt="" className='lg:w-[152px] lg:h-[152px] w-[100px] h-[100px]'/>
        <h1 className='text-center text-md font-bold'>{data.title}</h1>
      </Link>
      ))}
       {menu.map((data,i)=>(
      <Link to={'/'}  key={i} 
      className='
      lg:w-[256px] 
      lg:h-[256px] 
      w-[170px] 
      h-[170px] 
      bg-white 
      shadow-lg 
      rounded-3xl 
      overflow-hidden 
      flex 
      flex-col 
      items-center 
      justify-center p-2
      hover:bg-green-primary
      hover:text-white transition ease-in-out delay-150'>
        <img src={data.url} alt="" className='lg:w-[152px] lg:h-[152px] w-[100px] h-[100px]'/>
        <h1 className='text-center text-md font-bold'>{data.name}</h1>
      </Link>
      ))}
    </div>
  )
}

export default Menu