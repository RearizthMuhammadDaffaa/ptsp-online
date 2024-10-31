import { useState } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Panjar from "./pages/Panjar";
import Footer from "./components/Footer";
import HasilPanjar from "./pages/HasilPanjar";
import SyaratBerperkara from "./pages/SyaratBerperkara";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import LayoutSection from "./components/LayoutSection";
import RequiredAuth from "./components/RequiredAuth";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const ROLES = {
		'Admin': 'admin',
		'SuperAdmin': 'superadmin',
    "User": 'user'
	}
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route element={<LayoutSection />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/panjar" element={<Panjar />} />
        <Route path="/panjar/hasil-panjar/" element={<HasilPanjar />} />
        <Route path="/syarat-berperkara" element={<SyaratBerperkara />} />
        <Route element={<RequiredAuth allowedRoles={[ROLES.SuperAdmin, ROLES.Admin,ROLES.User]} />}>
        
        <Route path="/chat" element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
