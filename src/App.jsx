import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css";
import LandingPage from "./pages/beranda";
// import BasicExample from './components/layananKami';
// import kelebihan from './components/kelebihanqw';
// import Profit from './components/kelebihanqw';
// import Kategori from './components/kategori';
// import Testimoni from './components/Testimoni';
// import Footer from './components/Footer';
import TentangKami from "./pages/tentangKami";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hubungikami from "./pages/hubungikami";
import Blog from "./pages/blog";
import Home from "./pages/home";
import Booking from "./pages/pemesanan";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hubungikami" element={<Hubungikami />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/pemesanan" element={<Booking />} />
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
