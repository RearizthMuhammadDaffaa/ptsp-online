import React from 'react'
import SliderCard from '../components/homepage/SliderCard'
import TitleHome from '../components/homepage/TitleHome'
import Menu from '../components/homepage/Menu'
import Video from '../components/homepage/Video'
import SliderCard_2 from '../components/homepage/SliderCard_2'

const HomePage = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
      {/* <SliderCard /> */}
      <SliderCard_2 />
      </div>
      <TitleHome title="Layanan Pelayanan Terpadu Satu Pintu (PTSP) Online" subTitle="Layanan Online yang kami sediakan antara lain :" />
      <div className='max-w-7xl  mx-auto'>
        <Menu />
      </div>
      <TitleHome title="Video Informasi " subTitle="Informasi seputar Pengadilan Agama melalui video :"/>
      <div className='max-w-7xl  mx-auto'>
        <Video />
      </div>
    </div>
  )
}

export default HomePage