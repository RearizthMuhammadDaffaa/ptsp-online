import React, { useEffect, useState } from 'react'
import { dataSlider } from "../../utils/data";
const SliderCard_2 = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [position,setPosition] = useState(0)

  const handlePrev = () => {
    setPosition(position === 0 ?   -(dataSlider.length - 1) * 100 : position + 100)
    setSliderNumber((oldIndex)=> {
      let index = oldIndex - 1
      if (index < 0) {
        index = dataSlider.length - 1
      }
      return index
    });
  };
  const handleNext = () => {
    setPosition(position === -(dataSlider.length - 1) * 100 ? 0 : position - 100)
    // Jika sliderNumber sudah di slide terakhir, kembali ke slide pertama
    setSliderNumber((oldIndex)=>{
      let index = oldIndex + 1
      if (index > dataSlider.length - 1) {
        index = 0
      }
      return index
    });
  };
   // Fungsi untuk berpindah ke slide tertentu
   const goToSlide = (index) => {
    setPosition(-index * 100);
    setSliderNumber(index);
  };

  useEffect(()=>{
    console.log(position);
    
  },[position])
  return (
    <div className=''>
      <div className='flex relative md:h-[220px] lg:h-[443px] h-[130px]'>
      {/* <img src={dataSlider[sliderNumber].img}  alt={`data ke-${1}`} className={`w-full h-full`} /> */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(${position}%)` }}
      >

        {dataSlider.map((data,i)=>
          { 
           
            // let position = `nextSlide`
            // if (i === sliderNumber) {
            //   position = 'activeSlide'
            // }
            // if (
            //   i === sliderNumber - 1 ||
            //   (sliderNumber === 0 && i === dataSlider.length - 1)
            // ) {
            //   position = 'lastSlide'
            // }
        return(
         
            <img src={data.img} key={i} alt={`data ke-${i}`} className={`w-full h-full flex-shrink-0`} />
          
        )}
        )}
      </div>
         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={handlePrev}
           
            className="btn btn-circle hover:bg-green-primary hover:text-white"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
           
            className="btn btn-circle hover:bg-green-primary hover:text-white"
          >
            ❯
          </button>
        </div>
         <div className="flex w-full  z-10 justify-center  py-5 absolute bottom-0 gap-3">
        {dataSlider.map((_, index) => (
            <div
              key={index}
              className={`rounded-full h-[16px] w-[16px]  ${index === sliderNumber ? "bg-white" : "bg-gray-500"}`}
              onClick={() => goToSlide(index)}
            >
             
            </div>
          ))}
      </div>
       </div>

    </div>
  )
}

export default SliderCard_2