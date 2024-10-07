import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Docxtemplater from "docxtemplater";
import {saveAs} from "file-saver";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index"
const HasilPanjar = () => {
  // const { kecamatan } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
 const hargaPendaftaran = {
  pendaftaran:30000,
  redaksi:10000,
  materai:10000,
  proses:75000,
  totalHarga: function() {
    return (this.pendaftaran * 2) + this.redaksi + this.materai + this.proses;
  }
 }
  const { hargaPenggugat, hargaTergugat, title, kec, kecTergugat ,area,areaTergugat} =
    location.state || {};
   const  totalPendaftaran = hargaPenggugat.pendaftaran * 2 + hargaPenggugat.redaksi + hargaPenggugat.materai + hargaPenggugat.proses
  const totalhargaPendaftaran = typeof hargaPenggugat != "number" && (title == "istri" || title == "suami") ?  totalPendaftaran : hargaPendaftaran.totalHarga();

  function isPerkaraIstri(title) {
    let total = 0;
    if(title == "istri") {
      return total = area == 'luar-kabupaten' ? hargaPenggugat * 2 : hargaPenggugat.panggilanPenggugat * 2;
    } else if(title == "suami"){
      return total = !hargaPenggugat.panggilanPenggugat ? hargaPenggugat * 3 : hargaPenggugat.panggilanPenggugat * 3;
    } else {
     return  total = area == 'luar-kabupaten' ? hargaPenggugat * 4: hargaPenggugat.panggilanPenggugat * 4;
    }
  }


  const totalHargaPenggugat = isPerkaraIstri(title);
  const totalHargaTergugat =
    title == "istri"
      ? areaTergugat == 'luar-kabupaten' ? hargaTergugat * 3 : hargaTergugat.panggilanTergugat * 3
      : areaTergugat == 'luar-kabupaten' ? hargaTergugat * 4 : hargaTergugat.panggilanTergugat * 4;
  const totalHarga =
    totalhargaPendaftaran + totalHargaPenggugat + totalHargaTergugat;
  const totalHarga_2 = totalhargaPendaftaran + totalHargaPenggugat
  useEffect(() => {
    if (!location.state) {
      // Jika tidak ada state, redirect ke halaman kalkulator
      navigate("/panjar");
    }
  }, [location, navigate]);

  useEffect(() => {
    console.log("new debug");
    
    console.log(hargaPenggugat, hargaTergugat, title, kec, kecTergugat);
    console.log("hargaPenggugat: ", hargaPenggugat);
    console.log("hargaTergugat: ", hargaTergugat);
    console.log("area ",area);
    console.log("totalHargaPenggugat: ", totalHargaPenggugat);
    console.log("totalHargaTergugat: ", totalHargaTergugat);
    console.log("totalHargaPendaftaran: ", totalhargaPendaftaran);
    
  }, []);

  // if (!hargaPenggugat || !hargaTergugat) {
  //   return <div>Loading or invalid data...</div>;
  // }

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }

  const generateDocument = (title)=> {
    if(title == 'suami'){
        loadFile('../assets/file_doc/suami.docx', function(error,content){
          if(error){
            throw error;
          }
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
            
          });
          doc.render({
            pendaftaran: !hargaPenggugat.pendaftaran ? formatRupiah(hargaPendaftaran.pendaftaran) : formatRupiah(hargaPenggugat.pendaftaran),
            pnbp: hargaPenggugat.pendaftaran ?  formatRupiah(hargaPenggugat.pendaftaran) : formatRupiah(hargaPendaftaran.pendaftaran),
            redaksi: hargaPenggugat.redaksi ? formatRupiah(hargaPenggugat.redaksi) : formatRupiah(hargaPendaftaran.redaksi),
            materai: hargaPenggugat.materai ?  formatRupiah(hargaPenggugat.materai) : formatRupiah(hargaPendaftaran.materai),
            proses: hargaPenggugat.proses ?   formatRupiah(hargaPenggugat.proses) : formatRupiah(hargaPendaftaran.proses),
            kecamatan_penggugat: kec ? kec : "Luar Kabupaten Sumedang",
            biaya_penggugat: hargaPenggugat.panggilanPenggugat ? formatRupiah(hargaPenggugat.panggilanPenggugat) : formatRupiah(hargaPenggugat),
            total_biaya_penggugat: formatRupiah(totalHargaPenggugat),
            kecamatan_tergugat: !kec ? "Luar Kabupaten Sumedang": kec,
            biaya_tergugat: hargaTergugat.panggilanTergugat ? formatRupiah(hargaTergugat.panggilanTergugat) : formatRupiah(hargaTergugat),
            total_biaya_tergugat: formatRupiah(totalHargaTergugat),
            total_biaya: kecTergugat != null  ? formatRupiah(totalHarga) : formatRupiah(totalHarga_2),
          });
          const out = doc.getZip().generate({
            type: 'blob',
            mimeType:
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          }); //Output the document using Data-URI
          saveAs(out, 'output.docx');
        })
    } else if (title == 'istri'){
      loadFile('../assets/file_doc/istri.docx', function(error,content){
        if(error){
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
          
        });
        doc.render({
          pendaftaran: !hargaPenggugat.pendaftaran ? formatRupiah(hargaPendaftaran.pendaftaran) : formatRupiah(hargaPenggugat.pendaftaran),
          pnbp: hargaPenggugat.pendaftaran ?  formatRupiah(hargaPenggugat.pendaftaran) : formatRupiah(hargaPendaftaran.pendaftaran),
          redaksi: hargaPenggugat.redaksi ? formatRupiah(hargaPenggugat.redaksi) : formatRupiah(hargaPendaftaran.redaksi),
          materai: hargaPenggugat.materai ?  formatRupiah(hargaPenggugat.materai) : formatRupiah(hargaPendaftaran.materai),
          proses: hargaPenggugat.proses ?   formatRupiah(hargaPenggugat.proses) : formatRupiah(hargaPendaftaran.proses),
          kecamatan_penggugat: kec ? kec : "Luar Kabupaten Sumedang",
          biaya_penggugat: hargaPenggugat.panggilanPenggugat ? formatRupiah(hargaPenggugat.panggilanPenggugat) : formatRupiah(hargaPenggugat),
          total_biaya_penggugat: formatRupiah(totalHargaPenggugat),
          kecamatan_tergugat: !kec ? "Luar Kabupaten Sumedang": kec,
          biaya_tergugat: hargaTergugat.panggilanTergugat ? formatRupiah(hargaTergugat.panggilanTergugat) : formatRupiah(hargaTergugat),
          total_biaya_tergugat: formatRupiah(totalHargaTergugat),
          total_biaya: kecTergugat != null  ? formatRupiah(totalHarga) : formatRupiah(totalHarga_2),
        });
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        }); //Output the document using Data-URI
        saveAs(out, 'output.docx');
      })
    } else{
      loadFile('../assets/file_doc/permohonan.docx', function(error,content){
        if(error){
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
          
        });
        doc.render({
          pendaftaran: !hargaPenggugat.pendaftaran ? formatRupiah(hargaPendaftaran.pendaftaran) : formatRupiah(hargaPenggugat.pendaftaran),
          pnbp: hargaPenggugat.pendaftaran ?  formatRupiah(hargaPenggugat.pendaftaran) : formatRupiah(hargaPendaftaran.pendaftaran),
          redaksi: hargaPenggugat.redaksi ? formatRupiah(hargaPenggugat.redaksi) : formatRupiah(hargaPendaftaran.redaksi),
          materai: hargaPenggugat.materai ?  formatRupiah(hargaPenggugat.materai) : formatRupiah(hargaPendaftaran.materai),
          proses: hargaPenggugat.proses ?   formatRupiah(hargaPenggugat.proses) : formatRupiah(hargaPendaftaran.proses),
          kecamatan_penggugat: kec ? kec : "Luar Kabupaten Sumedang",
          biaya_penggugat: hargaPenggugat.panggilanPenggugat ? formatRupiah(hargaPenggugat.panggilanPenggugat) : formatRupiah(hargaPenggugat),
          total_biaya_penggugat: formatRupiah(totalHargaPenggugat),
          total_biaya: formatRupiah(totalHarga_2),
        });
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        }); //Output the document using Data-URI
        saveAs(out, 'output.docx');
      })
    }
  }



  return (
    <div className="flex flex-col justify-center items-center">
      <Layout>
        <div>
          <h1 className="text-green-primary font-bold text-xl mt-6">
            Kalkulator Panjar Biaya Perkara
          </h1>
          <div className="overflow-x-auto">
            <table className="table border-none">
              {/* head */}
              <thead>
                <tr className="border-none">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Biaya Pendaftaran :{" "} 
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {!hargaPenggugat.pendaftaran ? formatRupiah(hargaPendaftaran.pendaftaran) : formatRupiah(hargaPenggugat.pendaftaran)  }
                  </td>
                </tr>
                {/* row 2 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Biaya PNBP Pgl & PBT
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {hargaPenggugat.pendaftaran ?  formatRupiah(hargaPenggugat.pendaftaran) : formatRupiah(hargaPendaftaran.pendaftaran)}
                  </td>
                </tr>

                {/* row 4 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Redaksi
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {hargaPenggugat.redaksi ? formatRupiah(hargaPenggugat.redaksi) : formatRupiah(hargaPendaftaran.redaksi)}
                  </td>
                </tr>
                {/* row 5 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Materai
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {hargaPenggugat.materai ?  formatRupiah(hargaPenggugat.materai) : formatRupiah(hargaPendaftaran.materai)}
                  </td>
                </tr>
                {/* row 6 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Biaya Proses
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {hargaPenggugat.proses ?   formatRupiah(hargaPenggugat.proses) : formatRupiah(hargaPendaftaran.proses) }
                  </td>
                </tr>
                {/* row 7 */}
                <tr className="border-none">
                  <th className="border-none font-bold md:text-sm text-xs">
                    Biaya Panggilan{" "}
                    {title == "istri" ? "Penggugat (2x)" : title == "suami" ?  "Termohon (3x)" : "Termohon (4x)" }
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs"></td>
                </tr>
                {/* row 8 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Lokasi Kecamatan
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {kec ? kec : "Luar Kabupaten Sumedang"}
                  </td>
                </tr>
                {/* row 9 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Besar Biaya/Panggilan
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {hargaPenggugat.panggilanPenggugat ? formatRupiah(hargaPenggugat.panggilanPenggugat) : formatRupiah(hargaPenggugat)}
                  </td>
                </tr>
                {/* row 10 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Jumlah Biaya/Panggilan
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {formatRupiah(totalHargaPenggugat)}
                  </td>
                </tr>
                  {/* row 11 */}
                {
                  kecTergugat != null && (
                    <>
                <tr className="border-none">
                  <th className="border-none font-bold md:text-sm text-xs">
                    Biaya Panggilan{" "}
                    {title == "istri" ? "Penggugat (3x)" : "Termohon (4x)"}
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs"></td>
                </tr>
                   {/* row 12 */}
                   <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Lokasi Kecamatan
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {!kec ? "Luar Kabupaten Sumedang": kec}
                  </td>
                </tr>
                {/* row 13 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Besar Biaya/Panggilan
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {hargaTergugat.panggilanTergugat ? formatRupiah(hargaTergugat.panggilanTergugat) : formatRupiah(hargaTergugat)}
                  </td>
                </tr>
                {/* row 14 */}
                <tr className="border-none">
                  <th className="border-none font-normal md:text-sm text-xs">
                    Jumlah Biaya/Panggilan
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {formatRupiah(totalHargaTergugat)}
                  </td>
                </tr>
                </>
                  )
                
                }
              
             
                <tr className="border-none"></tr>
                {/* row 15 */}
                <tr className="border-none">
                  <th className="border-none font-bold text-green-primary md:text-sm text-xs">
                    Jumlah Total Biaya Panjar
                  </th>
                  <th></th>
                  <th></th>
                  <td className="text-right hasil-panjar-text md:text-sm text-xs">
                    {kecTergugat != null  ? formatRupiah(totalHarga) : formatRupiah(totalHarga_2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:w-[80%] w-full mt-5 mx-auto text-center">
          <p className="lg:text-lg text-xs">
            <span className="font-bold">Perhatian : </span>Kalkulator Panjar
            Biaya Perkara ini hanyalah alat bantu untuk mengetahui{" "}
            <span className="font-bold">estimasi </span>biaya panjar perkara.
            Informasi yang dihasilkan bukan data baku dan mungkin terdapat
            perbedaan.
          </p>
        </div>
        <div className="flex justify-self-start  mx-auto mt-2 gap-3">
          <Link to="/panjar">
            <button className="btn btn-outline hover:bg-green-primary text-green-primary hover:text-white">
              Kembali
            </button>
          </Link>
          <button onClick={ () =>generateDocument(title)} className="btn bg-green-primary btn-success text-white">
            Download
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default HasilPanjar;
