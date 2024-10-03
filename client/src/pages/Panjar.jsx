import React from "react";
import Layout from "../components/Layout";
const Panjar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Layout>
        <div className="">
          <h1 className="text-green-primary font-bold text-xl mt-6">
            Kalkulator Panjar Biaya Perkara
          </h1>
          <div className="w-full border-2 rounded-md mt-3">
            <label className="form-control w-full max-w-screen-xl p-2">
              <div className="label">
                <span className="label-text text-xs text-black">
                 Jenis Perkara 
                </span>
             
              </div>
              <select className="select select-xs border-none focus:border-none active:border-none">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
          </div>
        </div>
        {/* second select */}
        <div className="flex gap-5">
        <div className="w-[50%]">
          <h1 className="text-green-primary font-bold text-xl mt-6">
            Kalkulator Panjar Biaya Perkara
          </h1>
          <div className="w-full border-2 rounded-md mt-3">
            <label className="form-control w-full max-w-screen-xl p-2">
              <div className="label">
                <span className="label-text text-xs text-black">
                 Jenis Perkara 
                </span>
             
              </div>
              <select className="select select-xs border-none custom-select">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
          </div>
          <div className="w-full border-2 rounded-md mt-3">
            <label className="form-control w-full max-w-screen-xl p-2">
              <div className="label">
                <span className="label-text text-xs text-black">
                 Jenis Perkara 
                </span>
             
              </div>
              <select className="select select-xs border-none focus:border-none active:border-none">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
          </div>
        </div>

        <div className="w-[50%]">
          <h1 className="text-green-primary font-bold text-xl mt-6">
            Kalkulator Panjar Biaya Perkara
          </h1>
          <div className="w-full border-2 rounded-md mt-3">
            <label className="form-control w-full max-w-screen-xl p-2">
              <div className="label">
                <span className="label-text text-xs text-black">
                 Jenis Perkara 
                </span>
             
              </div>
              <select className="select select-xs border-none focus:border-none active:border-none">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
          </div>
          <div className="w-full border-2 rounded-md mt-3">
            <label className="form-control w-full max-w-screen-xl p-2">
              <div className="label">
                <span className="label-text text-xs text-black">
                 Jenis Perkara 
                </span>
             
              </div>
              <select className="select select-xs border-none focus:border-none active:border-none">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  );
};

export default Panjar;
