import React, { useEffect, useRef, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/navbarIMG/PA-SUMEDANG 1 (1).jpg";
import useAuth from '../hooks/useAuth';
const Register = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  const RegisterUrl = `${import.meta.env.VITE_API}signup`;
  console.log("Register URL:", RegisterUrl);  // Debugging URL
  try {
      const response = await axios.post(`${RegisterUrl}`,
          {
            name:name,
            email:user,
            password:pwd
          },
        
      );
    
    navigate('/login');
  } catch (err) {
      if (!err?.response) {
          setErrMsg(err.message);
      
      // errRef.current.focus();
  }
}
}
  return (
    <>
    <div className="flex h-screen flex-1 flex-col bg-white text-black justify-center px-6 py-12 lg:px-8">
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
         Create New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">
              Username
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                onChange={(e)=> setName(e.target.value)}
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={(e)=> setUser(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e)=> setPwd(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Sudah Punya Akun?{' '}
          <Link to="/login" className="font-semibold leading-6 text-green-primary hover:text-indigo-500">
           Login
          </Link>
        </p>
        <p className="mt-1 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/" className="font-semibold leading-6 text-green-primary hover:text-indigo-500">
           Kembali Ke Menu Utama
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Register