import React, { useEffect, useState } from "react";

import { dataSlider } from "../../utils/data";
const SliderCard = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
 

  const handlePrev = () => {
 
    setSliderNumber(
      sliderNumber === 0 ? dataSlider.length - 1 : sliderNumber - 1
    );
  };
  const handleNext = () => {
 
    // Jika sliderNumber sudah di slide terakhir, kembali ke slide pertama
    setSliderNumber(
      sliderNumber === dataSlider.length - 1 ? 0 : sliderNumber + 1
    );
  };
   // Fungsi untuk berpindah ke slide tertentu
   const goToSlide = (index) => {
 
    setSliderNumber(index);
  };



  return (
    <div className="carousel w-screen z-0">
      <div
        id={`slider${sliderNumber}`}
        className="carousel-item relative w-full mx-auto flex flex-col"
      >
        <div className="w-full">

        <img src={dataSlider[sliderNumber].img} className={`w-full transition-transform duration-700 ease-in-out transform `}
        
        alt={`Slide${sliderNumber + 1}`}/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            onClick={handlePrev}
            href={`#slider${sliderNumber}`}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            onClick={handleNext}
            href={`#slider${sliderNumber}`}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
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
    // <div className='slider-container  mx-auto max-w-screen-lg'>
    //   <Slider {...settings}>
    //     {
    //       dataSlider.map((data,i)=>(
    //         <div className=''  key={i}>

    //           <img src={data.img} className='w-full' alt={`data-${i}`}/>
    //         </div>
    //       ))
    //     }

    //   </Slider>
    // </div>
  );
};

export default SliderCard;
