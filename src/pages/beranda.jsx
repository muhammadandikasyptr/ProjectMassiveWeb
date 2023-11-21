import {} from "react-bootstrap"
import quickwashImage from "../assets/images/ldp/quickwash.png"
import BasicExample from "./layananKami"
const LandingPage = () => {
    return (
        <div style={{marginLeft:"100px", marginTop:"50px", color:"white"}}>
            <h1>Quick Wash</h1>
            <h1>Cuci Motor dan Mobil</h1>
            <br />
            <h4>Temukan pengalaman baru</h4>
            <h4>mencuci kendaraan anda, dan</h4>
            <h4>rasakan perbedaannya</h4>
            <p>#QuickWashinAja</p>
            <br />
            <img src="quickwashImage" alt="" />
            <h6>Dapatkan Aplikasi</h6>
            <br />
            <br /> 
            {/* <BasicExample /> */}

        </div>
    )   
}

export default LandingPage

    