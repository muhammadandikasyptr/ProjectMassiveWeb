import { useState } from 'react'
import './App.css'
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css"
import LandingPage from "./pages/beranda"
// import BasicExample from './pages/layananKami';



const App = () => {

  return (
    <div className="myBG border"> 
      <header className='navbar'>
          <NavigationBar />
          <LandingPage />
        

      </header>

    
    
    
    </div>
  )
}

  export default App;