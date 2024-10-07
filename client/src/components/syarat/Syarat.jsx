import React from 'react'
import ModalSyarat from './ModalSyarat'
import { dataSyarat } from '../../utils/data'
const Syarat = () => {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-[10px] items-center mt-5'>
      {
        dataSyarat.map((data,i)=> (
          <>
              <div key={i}  onClick={()=>document.getElementById(`my_modal_${i}`).showModal()} className='border  h-[49px] p-[15px] shadow-md rounded-lg cursor-pointer text-center'>
          <h1>{data.syarat}</h1>
        </div>
        <ModalSyarat  id={i}/>
          </>
        
     
        ))
      }
       
          
     
        
      
        
    </div>
    </div>
  )
}

export default Syarat