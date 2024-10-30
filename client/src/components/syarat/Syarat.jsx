import React, { useEffect, useState } from 'react'
import ModalSyarat from './ModalSyarat'
import axios from 'axios';
// import { dataSyarat } from '../../utils/data'
const Syarat = () => {
  const [dataPerkara,setDataPerkara] = useState([]);
  const getDataPerkara = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}perkara`);
      setDataPerkara(response.data);
      console.log(dataPerkara);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=> {
    getDataPerkara();
  },[])
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-[10px] items-center mt-5'>
      {
        dataPerkara.map((data,i)=> (
          <>
              <div key={i}  onClick={()=>document.getElementById(`my_modal_${data.id_perkara}`).showModal()} className='border  h-[49px] p-[15px] shadow-md rounded-lg cursor-pointer text-center transition ease-in-out delay-100  hover:bg-green-primary hover:text-white '>
          <h1>{data.name}</h1>
        </div>
        <ModalSyarat  id={data.id_perkara}/>
          </>
        
     
        ))
      }
       
          
     
        
      
        
    </div>
    </div>
  )
}

export default Syarat