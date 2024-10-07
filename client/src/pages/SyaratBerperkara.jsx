import React from "react";
import Syarat from "../components/syarat/Syarat";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const SyaratBerperkara = () => {
  return (
    <div className="max-w-5xl mx-auto flex justify-center">
        <Layout>
          <div className="flex flex-col gap-5 px-4">
            <h1 className="text-green-primary font-bold text-xl mt-6">
              Syarat Berperkara
            </h1>
            <h3 className="font-bold md:text-base text-sm">Silahkan Pilih Jenis Perkara yang Anda inginkan :</h3>
            <Syarat />
            <Link to={`/`} className="btn bg-green-primary w-[230px] h-[49px] mx-auto mt-3 text-white hover:text-green-primary">kembali ke halaman utaman</Link>
          </div>
        </Layout>
      </div>
  );
};

export default SyaratBerperkara;
