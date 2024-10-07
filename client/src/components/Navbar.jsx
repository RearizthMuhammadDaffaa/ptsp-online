import React from "react";
import logo from "../assets/navbarIMG/PA-SUMEDANG 1 (1).jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-[20px] py-2 flex  gap-[15px] bg-green-primary shadow-slate-100 ">
      <Link to='/'>
      
     <img src={logo} alt="" className="lg:ml-5 bg-green-primary"/>
      </Link>
     <div className="container flex flex-col  mr-auto text-left leading-tight justify-center">
      <h1 className="font-bold text-white">PTSP ONLINE</h1>
      <h1 className="text-sm text-white">Pengadilan Agama Kelas 1A Sumedang</h1>
     </div>
    </div>
  );
};

export default Navbar;
