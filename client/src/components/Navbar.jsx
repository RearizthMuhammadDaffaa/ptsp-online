import React from "react";
import logo from "../assets/navbarIMG/logo.jpg";

const Navbar = () => {
  return (
    <div className="px-[20px] py-2 flex  gap-[15px] bg-base-100 shadow-slate-100 ">
     <img src={logo} alt="" className="lg:ml-5"/>
     <div className="container flex flex-col  mr-auto text-left leading-tight justify-center">
      <h1 className="font-bold">PTSP ONLINE</h1>
      <h1 className="text-sm">Pengadilan Agama Kelas 1A Sumedang</h1>
     </div>
    </div>
  );
};

export default Navbar;
