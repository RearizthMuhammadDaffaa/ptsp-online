import React, { useEffect, useState } from "react";
import logo from "../assets/navbarIMG/PA-SUMEDANG 1 (1).jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [navbar,setNavbar] = useState([]);
  const getDataNavbar = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}navbar`);
      setNavbar(response.data);
      console.log(dataVideo);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=> {
    getDataNavbar();
  },[])

  return (
    <div className="px-[10px] md:px-[50px] py-2 flex  gap-[15px] bg-green-primary shadow-slate-100 justify-between items-center">
      <Link to='/'>
      
     {/* <img src={navbar[0].url} alt="" className=" md:w-full md:h-full w-[100px] bg-green-primary"/> */}
      </Link>
     <div className="container flex flex-col  mr-auto text-left leading-tight justify-center">
      {/* <h1 className="font-bold text-white">{navbar[0].name}</h1> */}
      {/* <h1 className="text-sm text-white">{navbar[0].title}</h1> */}
     </div>
     <div className="hidden md:flex justify-center items-center gap-10">
      <Link className="text-white">Home</Link>
      <Link className="text-white">Login</Link>
     </div>
     <div className="navbar-start ml-20 md:hidden">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="white" >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow ">
        <li> <Link>Home</Link></li>
        <li>  <Link>Login</Link></li>

      </ul>
    </div>
  </div>
    </div>
  );
};

export default Navbar;
