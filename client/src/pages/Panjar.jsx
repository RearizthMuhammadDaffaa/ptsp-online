import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
// import { dataKecamatan, dataHarga } from "../utils/data";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Panjar = () => {
  const [area, setArea] = useState("dalam-kabupaten");
  const [areaTergugat, setAreaTergugat] = useState("dalam-kabupaten");
  const [radiusTergugat, setRadiusTergugat] = useState(1);
  const [radiusPenggugat, setRadiusPenggugat] = useState(1);
  const [harga_p, setHarga_P] = useState({});
  const [harga_t, setHarga_T] = useState({});
  const [dataKecamatan,setDataKecamatan] = useState([]);
  const [dataHarga,setDataHarga] = useState([]);
  const [kec, setKec] = useState("");
  const [kecTergugat, setKecTergugat] = useState("");
  const navigate = useNavigate();
  const [title, setTitle] = useState("suami");
  
  
  const getDataKecamatan = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}kecamatan`)
      setDataKecamatan(response.data)
      console.log(dataKecamatan);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  const getDataHarga = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}harga`)
      setDataHarga(response.data)
      console.log("ini data harga",dataHarga);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }


  useEffect(()=> {
    getDataKecamatan()
    getDataHarga()
  },[])

  const handleHitungPanjar = () => {
    // const radiusTerkecil = Math.min(radiusPenggugat, radiusTergugat);
    const indexKecPeng = dataKecamatan.find(item => item.kecamatan === kec);
    const hargaPenggugat = indexKecPeng ? dataHarga.find(item => item.radius === indexKecPeng.radius) : null
    const indexKecTer = dataKecamatan.find(item => item.kecamatan === kecTergugat);
    const hargaTergugat = indexKecTer ? dataHarga.find(item => item.radius === indexKecTer.radius) : null;
    const finalHargaPenggugat = hargaPenggugat ? hargaPenggugat :  harga_p ;
    const finalHargaTergugat = hargaTergugat ? hargaTergugat :  harga_t ;
    // console.log("ini harga penggugat : ",hargaTergugat);
    // console.log("ini harga final penggugat : ",finalHargaPenggugat);
    // return
    

    // Jika hargaTergugat kosong, gunakan harga_t
   
    navigate(`/panjar/hasil-panjar/`, { state: { hargaPenggugat: finalHargaPenggugat, hargaTergugat: finalHargaTergugat, title, kec, kecTergugat ,area,areaTergugat} });
    
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <Layout>
        <div className="">
          <h1 className="text-green-primary font-bold text-xl mt-6">
            Kalkulator Panjar Biaya Perkara
          </h1>
          <div className="w-full border-1 rounded-md mt-3 border-black">
            <label className="form-control w-full max-w-screen-xl p-2">
              <div className="label">
                <span className="label-text text-xs text-black">
                  Jenis Perkara
                </span>
              </div>
              <select
                className="select select-xs border-none focus:border-none active:border-none custom-select"
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="suami">Cerai Talak (Diajukan Suami)</option>
                <option value="istri">Cerai Gugat (Diajuka istri)</option>
                <option value="permohonan">permohonan</option>
              </select>
            </label>
          </div>
        </div>

        {title != "permohonan" ? (
          <div className="flex md:gap-5 gap-2">
            <div className="w-[50%]">
              <h1 className="text-green-primary font-bold text-xl mt-6">
                {title == "suami"
                  ? "Data Pemohon (suami)"
                  : "Data Penggugat (Istri)"}
              </h1>
              <div className="w-full border-1 border-black rounded-md mt-3">
                <label className="form-control w-full max-w-screen-xl md:p-2">
                  <div className="label">
                    <span className="label-text text-xs text-black">
                      Tempat tinggal{" "}
                      {title == "suami" || title == "permohonan"
                        ? "Pemohon"
                        : "Penggugat"}
                    </span>
                  </div>
                  <select
                    className="select select-xs border-none custom-select"
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option value="dalam-kabupaten">
                      Dalam Kabupaten Sumedang
                    </option>
                    <option value="luar-kabupaten">
                      Luar Kabupaten Sumedang
                    </option>
                  </select>
                </label>
              </div>
              <div className="w-full border-1 border-black rounded-md mt-3">
                <label className="form-control w-full max-w-screen-xl md:p-2">
                  <div className="label">
                    <span className="label-text text-xs text-black">
                      {area == "luar-kabupaten"
                        ? "Nilai Radius Termasuk Ongkos Kirim (Rp)"
                        : "Kecamatan"}
                    </span>
                  </div>
                  {area == "luar-kabupaten" ? (
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-xs w-full custome-select "
                      onChange={(e)=>{
                        setKec("");
                        setHarga_P(parseInt(e.target.value))
                      }}
                    />
                  ) : (
                    <select
                      className="select select-xs border-none focus:border-none active:border-none custom-select"
                      onChange={(e) => {
                        setRadiusPenggugat(e.target.value);
                        setKec(e.target.options[e.target.selectedIndex].text);
                      }}
                    >
                       <option value="" > Pilih Kecamatan</option>
                      {dataKecamatan.map((kec, i) => (
                        <option key={i} value={kec.radius}>
                          {kec.kecamatan}
                        </option>
                      ))}
                    </select>
                  )}
                </label>
              </div>
            </div>

            <div className="w-[50%]">
              <h1 className="text-green-primary font-bold text-xl mt-6">
                {title == "suami"
                  ? "Data Termohon (istri)"
                  : title != "istri"
                  ? "Data Termohon"
                  : "Data Tergugat (Suami)"}
              </h1>
              <div className="w-full border-1 border-black rounded-md mt-3">
                <label className="form-control w-full max-w-screen-xl md:p-2">
                  <div className="label">
                    <span className="label-text text-xs text-black">
                      Tempat tinggal{" "}
                      {title == "suami" || title == "permohonan"
                        ? "Termohon"
                        : "Tergugat"}
                    </span>
                  </div>
                  <select
                    className="select select-xs border-none focus:border-none active:border-none custom-select "
                    onChange={(e) => setAreaTergugat(e.target.value)}
                  >
                    <option value="dalam-kabupaten">
                      Dalam Kabupaten Sumedang
                    </option>
                    <option value="luar-kabupaten">
                      Luar Kabupaten Sumedang
                    </option>
                  </select>
                </label>
              </div>
              <div className="w-full border-1 border-black rounded-md mt-3">
                <label className="form-control w-full max-w-screen-xl md:p-2">
                  <div className="label">
                    <span className="label-text text-xs text-black">
                      {areaTergugat == "luar-kabupaten"
                        ? "Nilai Radius Termasuk Ongkos Kirim (Rp)"
                        : "Kecamatan"}
                    </span>
                  </div>
                  {areaTergugat == "luar-kabupaten" ? (
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-xs w-full custome-select "
                      onChange={(e)=>{
                        setKecTergugat("");
                        setHarga_T(parseInt(e.target.value))
                      }}
                    />
                  ) : (
                    <select
                      className="select select-xs border-none focus:border-none active:border-none custom-select"
                      onChange={(e) => {
                        setRadiusTergugat(e.target.value);
                        setKecTergugat(
                          e.target.options[e.target.selectedIndex].text
                        );
                      }}
                    >
                       <option value="" > Pilih Kecamatan</option>
                      {dataKecamatan.map((kec, i) => (
                        <option key={i} value={kec.radius}>
                          {kec.kecamatan}
                        </option>
                      ))}
                    </select>
                  )}
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <h1 className="text-green-primary font-bold text-xl mt-6">
              {title == "suami"
                ? "Data Termohon (suami)"
                : title != "istri"
                ? "Data Termohon"
                : "Data Penggugat (Istri)"}
            </h1>
            <div className="w-full border-1 border-black rounded-md mt-3">
              <label className="form-control w-full max-w-screen-xl p-2">
                <div className="label">
                  <span className="label-text text-xs text-black">
                    Tempat tinggal{" "}
                    {title == "suami" || title == "permohonan"
                      ? "Termohon"
                      : "Tergugat"}
                  </span>
                </div>
                <select
                  className="select select-xs border-none custom-select"
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option value="dalam-kabupaten">
                    Dalam Kabupaten Sumedang
                  </option>
                  <option value="luar-kabupaten">
                    Luar Kabupaten Sumedang
                  </option>
                </select>
              </label>
            </div>
            <div className="w-full border-1 border-black rounded-md mt-3">
              <label className="form-control w-full max-w-screen-xl p-2">
                <div className="label">
                  <span className="label-text text-xs text-black">
                    {area == "luar-kabupaten"
                      ? "Nilai Radius Termasuk Ongkos Kirim (Rp)"
                      : "Kecamatan"}
                  </span>
                </div>
                {area == "luar-kabupaten" ? (
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-xs w-full custome-select "
                    onChange={(e)=>{
                      setKec("");
                      setKecTergugat(null)
                      setHarga_P(e.target.value)
                    }}
                  />
                ) : (
                  <select
                    className="select select-xs border-none focus:border-none active:border-none custom-select"
                    onChange={(e) => {
                      setRadiusPenggugat(e.target.value);
                      setKec(e.target.options[e.target.selectedIndex].text);
                      setKecTergugat(null)
                    }}
                  >
                    <option value="" > Pilih Kecamatan</option>
                    {dataKecamatan.map((kec, i) => (
                      <option key={i} value={kec.radius}>
                        {kec.kecamatan}
                      </option>
                    ))}
                  </select>
                )}
              </label>
            </div>
          </div>
        )}

        <div className="w-full text-center">
          <p className="lg:text-lg text-xs">
            <span className="font-bold">Perhatian : </span>Kalkulator Panjar
            Biaya Perkara ini hanyalah alat bantu untuk mengetahui{" "}
            <span className="font-bold">estimasi </span>biaya panjar perkara.
            Informasi yang dihasilkan bukan data baku dan mungkin terdapat
            perbedaan.
          </p>
        </div>

        <div className="flex justify-self-start mx-auto mt-2 gap-3">
          <Link to="/">
            <button className="btn btn-outline hover:bg-green-primary text-green-primary hover:text-white">
              Ke Halaman Utama
            </button>
          </Link>
          <button
            className="btn bg-green-primary btn-success text-white"
            onClick={handleHitungPanjar}
          >
            Hitung Biaya Pinjar
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Panjar;
