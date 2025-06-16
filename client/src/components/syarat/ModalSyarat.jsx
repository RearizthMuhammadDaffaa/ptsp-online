import React, { useEffect, useState,useRef } from "react";
import { dataSyarat } from "../../utils/data";
import axios from "axios";

const ModalSyarat = ({ id }) => {
  const [dataPerkara, setDataPerkara] = useState([]);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);


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

  const closeModal = () => {
    modalRef.current.close(); // Tutup modal saat tombol ditekan
  };

  const handlePrint = () => {
    const printContent = modalContentRef.current.innerHTML;
    const printWindow = window.print();
    // printWindow.document.write(`
    //   <html>
    //     <head>
    //       <title>Print Modal Content</title>
    //       <style>
    //         body { font-family: Arial, sans-serif; }
    //         .modal-content { margin: 20px; }
    //       </style>
    //     </head>
    //     <body onload="window.print(); window.close();">
    //       <div class="modal-content">${printContent}</div>
    //     </body>
    //   </html>
    // `);
    printWindow.document.close();
  };

  return (
    <dialog ref={modalRef} id={`my_modal_${id}`} className="modal">
      <div ref={modalContentRef} className="bg-white w-[90%]   h-full md:h-auto relative p-5 rounded-md overflow-y-auto">
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
          <h1 className="font-bold md:text-base text-sm mt-3">{dataPerkara.title1 ? dataPerkara.title1 : "Syarat"}</h1>
          <ol start="1" className="ml-5">
            {dataPerkara.syarats?.map((data, i) => (
              <li  key={i}>{data.deskripsi_syarat}</li>
            ))}
          </ol>
          {Array.isArray(dataPerkara.syarat_tambahans) &&
            dataPerkara.syarat_tambahans.length > 0 && (
              <>
                <h1 className="font-bold md:text-base text-sm mt-3">{dataPerkara.title2 ? dataPerkara.title2 : "Syarat Tambahan"}</h1>
                <ol start="1" className="ml-5">
                  {dataPerkara.syarat_tambahans.map((data, i) => (
                    <li key={i}>{data.deskripsi_syarat_tambahan}</li>
                  ))}
                </ol>
              </>
            )}

          <h1 className="font-bold md:text-base text-sm mt-3">Catatan</h1>
          <ul>
            {Array.isArray(dataPerkara.catatans) &&
              dataPerkara.catatans.map((data, i) => (
                <li key={i} className="md:text-base text-sm">{data.nama_catatan}</li>
              ))}
          </ul>
          {/* Center the buttons */}
          <div className="flex justify-center gap-4 mt-5">
            <button className="btn" onClick={closeModal}>Kembali</button>
            <button className="btn" onClick={handlePrint}>Download</button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalSyarat;
