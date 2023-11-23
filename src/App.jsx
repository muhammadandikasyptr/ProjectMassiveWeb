import { useState } from 'react'
import './App.css'
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css"
import LandingPage from "./pages/beranda"
// import BasicExample from './components/layananKami';
// import kelebihan from './components/kelebihanqw';
// import Profit from './components/kelebihanqw';
// import Kategori from './components/kategori';
// import Testimoni from './components/Testimoni';
// import Footer from './components/Footer';
import TentangKami from './pages/tentangKami';
import Login from './pages/login';



const App = () => {

  return (
    <div className="myBG border"> 
      <div>
        <LandingPage />
      </div>
      <br />
      <div>
        <Login />
      </div>
      <br />
      <div>
        <TentangKami />
      </div>
          
  
  

    
    
    
    </div>
  )
}

  export default App;