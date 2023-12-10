import { useState } from "react";
import "./App.css";
import "./style/landingPage.css";
import LandingPage from "./pages/beranda";
import TentangKami from "./pages/tentangKami";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hubungikami from "./pages/hubungikami";
import Blog from "./pages/blog";
import Home from "./pages/home";
import Booking from "./pages/pemesanan";
import Akun from "./pages/akun";
import Daftar from "./pages/daftar";
import Loginawal from "./pages/loginawal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginawal" element={<Loginawal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hubungikami" element={<Hubungikami />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/pemesanan" element={<Booking />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/daftar" element={<Daftar />} />
        {/* <Route path='/profil' element={<ProfilSiswa/>}/>
        <Route path='/editsiswa' element={<EditProfilSiswa/>}/>
        <Route path='/pinjamsiswa' element={<PeminjamanSiswa/>}/>
        <Route path='/kembalisiswa' element={<Pengembaliansiswa/>}/>
        <Route path='/detailbuku' element={<Detailbuku/>}/> */}
      </Routes>
          
    </Router>
  );
};

export default App;
