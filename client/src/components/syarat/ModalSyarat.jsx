import React from "react";
import { dataSyarat } from "../../utils/data";

const ModalSyarat = ({ id }) => {
  return (
    <dialog id={`my_modal_${id}`} className="modal">
      <div className="bg-white md:w-[80%] h-full md:h-auto relative p-5 rounded-md overflow-y-auto">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <h1 className="text-green-primary font-bold text-xl mt-6">
            Syarat Berperkara
          </h1>
          <h1 className="font-bold text-base mt-3">{dataSyarat[id].title_1}</h1>
          <ol start="1" className="ml-5">
            {dataSyarat[id].syarat_list.map((data,i)=>(
               <li key={i}>
                {data}
             </li>
            ))}
           
          </ol>
          {dataSyarat[id].title_2 && (
                <>
                <h1 className="font-bold text-base mt-3">{dataSyarat[id].title_2}</h1>
                <ol start="1" className="ml-5">
                  {dataSyarat[id].syarat_list2.map((data,i)=>(
                       <li key={i}>{data}</li>
                  ))}
                 
              
                </ol>
                </>
          )}
        
         
          <h1 className="font-bold text-base mt-3">Catatan</h1>
          <ul>
            {dataSyarat[id].catatan.map((data,i)=> (
                <li key={i}>{data}</li>
            ))}
            
          </ul>
          {/* Center the buttons */}
          <div className="flex justify-center gap-4 mt-5">
            <button className="btn">Kembali</button>
            <button className="btn">Download</button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalSyarat;
