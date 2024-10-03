import React from 'react'
import { dataFooter } from '../utils/data'

const Footer = () => {
  return (
    <div className='flex flex-col bg-green-primary gap-5 relative mt-5 w-full md:h-[372px] justify-center absolute bottom-0'>
      <div className='flex flex-col md:flex-row gap-5 justify-between items-center md:px-[70px]'>
      <div className='flex flex-col justify-center items-center mt-3 md:mt-0 gap-5 md:w-[332px]'>
        <h1 className='text-xl text-white font-bold leading-7'>Pengadilan Agama Sumedang</h1>
        <p className='text-base text-white leading-4 text-center'>Jl. Statistik No.35, Situ, Kec. Sumedang Utara,
        Kabupaten Sumedang, Jawa Barat 45621</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-5 p-3 md:w-[203px] md:justify-start md:items-start'>
        <h1 className='text-xl text-white font-bold leading-7'>Company</h1>
        <ul className='flex flex-col gap-3'>
          <li className='text-base text-white leading-4 text-center md:text-left'>About Us</li>
          <li className='text-base text-white leading-4 text-center md:text-left'>Careers</li>
          <li className='text-base text-white leading-4 text-center md:text-left'>FAQs</li>
          <li className='text-base text-white leading-4 text-center md:text-left'>Teams</li>
          <li className='text-base text-white leading-4 text-center md:text-left'>Contact Us</li>
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center gap-7'>
      <button className="btn btn-warning text-white w-[203px] h-[40px] ">Contact Us</button>
      <button className="btn btn-warning text-white w-[203px] h-[40px] ">Get Started</button>
      </div>
      <div className='flex gap-3 justify-center items-center md:ml-10'>
        {dataFooter.map((data,i)=>(
          <img src={data.img} key={i} alt={`img ke-${i}`} />
        ))}
      </div>
      </div>

      <p className='text-center md:absolute md:bottom-0 w-full text-white text-base'>© 2024 All Rights Reserved</p>
    
    </div>
  )
}

export default Footer