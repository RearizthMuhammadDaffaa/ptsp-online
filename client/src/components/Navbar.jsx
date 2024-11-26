import React, { useEffect, useState } from "react";
import logo from "../assets/PA-SUMEDANG.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [navbar, setNavbar] = useState([]);
 const {auth,setAuth} = useAuth();
 const navigate = useNavigate();
  const getDataNavbar = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}navbar`);
      setNavbar(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = async () => {
		try {
			await axios.post(`${import.meta.env.VITE_API}logout`);
			localStorage.removeItem('authuser');
			setAuth(null);
			navigate("/login");  // Redirect to login page after successful logout
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};


  useEffect(() => {
    getDataNavbar();
    // console.log(auth?.user);
    
  }, []);

  return (
    <div className="px-[10px] md:px-[50px] py-2 flex gap-[15px] bg-green-primary shadow-slate-100 justify-between items-center">
      <Link to='/'>
        <img 
          src={navbar[0]?.url || logo} // Gunakan logo default jika navbar[0] belum ada
          alt="Logo" 
          className="md:w-[70px] md:h-[70px] w-[70px] bg-green-primary"
        />
      </Link>
      <div className="container flex flex-col mr-auto text-left leading-tight justify-center">
        <h1 className="font-bold text-white">{navbar[0]?.name || "PTSP ONLINE"}</h1>
        <h1 className="text-sm text-white">{navbar[0]?.title || "Pengadilan Agama Kelas 1A Sumedang"}</h1>
      </div>
      <div className="hidden md:flex justify-center items-center gap-10">
        <Link to="/" className="text-white">Home</Link>
        {auth && auth.user ? (
          <button onClick={handleLogout} className="text-white">Logout</button>
        ) : (
          <Link to="/login" className="text-white">Login</Link>
        )}
       
      </div>

      {/* Drawer untuk tampilan mobile */}
      <div className="md:hidden">
        <label htmlFor="drawer-toggle" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
      </div>

      {/* Drawer content */}
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle hidden" />
      <div className="drawer-side fixed left-0 top-0  h-full z-20">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li><Link to="/">Home</Link></li>
          <li>{auth && auth.user ? (
              <button className="text-left" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" className="">Login</Link> )}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
