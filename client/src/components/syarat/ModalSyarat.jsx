import React, { useEffect, useState } from "react";
import { dataSyarat } from "../../utils/data";
import axios from "axios";

const ModalSyarat = ({ id }) => {
  const [dataPerkara, setDataPerkara] = useState([]);
  const getDataPerkara = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}syarat-perkara/${id}`
      );
      setDataPerkara(response.data);
      console.log(dataPerkara);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataPerkara();
  }, [id]);
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
          <h1 className="font-bold text-base mt-3">test</h1>
          <ol start="1" className="ml-5">
            {dataPerkara.syarats?.map((data, i) => (
              <li key={i}>{data.deskripsi_syarat}</li>
            ))}
          </ol>
          {Array.isArray(dataPerkara.syarat_tambahans) &&
            dataPerkara.syarat_tambahans.length > 0 && (
              <>
                <h1 className="font-bold text-base mt-3">test</h1>
                <ol start="1" className="ml-5">
                  {dataPerkara.syarat_tambahans.map((data, i) => (
                    <li key={i}>{data.deskripsi_syarat_tambahan}</li>
                  ))}
                </ol>
              </>
            )}

          <h1 className="font-bold text-base mt-3">Catatan</h1>
          <ul>
            {Array.isArray(dataPerkara.catatans) &&
              dataPerkara.catatans.map((data, i) => (
                <li key={i}>{data.nama_catatan}</li>
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
