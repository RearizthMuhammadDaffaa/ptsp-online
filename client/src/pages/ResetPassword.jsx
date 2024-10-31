import React, { useEffect, useRef, useState } from 'react'
// import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/navbarIMG/PA-SUMEDANG 1 (1).jpg";
import useAuth from '../hooks/useAuth';
const ResetPassword = () => {
  const { setAuth } = useAuth();
  const {token} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [msg,setMsg] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  const loginUrl = `${import.meta.env.VITE_API}reset-password/${token}`;
  console.log("Login URL:", loginUrl);  // Debugging URL
  try {
      const response = await axios.post(`${loginUrl}`,
          {
            password:pwd
          }
      );
      console.log("berhasil");
      setMsg("Verfikasi Reset Password sudah dikirim ke Email");
      navigate('/login')
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      }
  }
}
  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className="flex h-screen flex-1 flex-col bg-white text-black justify-center px-6 py-12 lg:px-8">
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
          Reset Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
        {msg && (<p>{msg}</p>)}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
              Reset Password
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="password"
                required
                onChange={(e)=> setPwd(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

       

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Password
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/register" className="font-semibold leading-6 text-green-primary hover:text-indigo-500">
           Register
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

export default ResetPassword