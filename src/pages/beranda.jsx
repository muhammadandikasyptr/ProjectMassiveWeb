import {} from "react-bootstrap"
import quickwashImage from "../assets/images/ldp/quickwash.png"
import playstoreImage from "../assets/images/ldp/playstore.png"
import NavigationBar from "../components/NavigationBar"
import BasicExample from "../components/layananKami"
import Profit from "../components/kelebihanqw"
import Kategori from "../components/kategori"
import Testimoni from "../components/Testimoni"
import Footer from "../components/footer"
import "../style/landingPage.css"

const LandingPage = () => {
    return (
    <div className="beranda" id="beranda">
        <NavigationBar />
            <div className="kotak1">
                <div style={{marginLeft:"100px", marginTop:"0px", color:"white", width:"400px"}}>
                    <br />
                    <br />
                    <br />
                    <h1>Quick Wash</h1>
                    <h1>Cuci Motor dan Mobil</h1>
                    <br />
                    <h4>Temukan pengalaman baru</h4>
                    <h4>mencuci kendaraan anda, dan</h4>
                    <h4>rasakan perbedaannya</h4>
                    <p>#QuickWashinAja</p>
                    <br />
                <h6>Dapatkan Aplikasi</h6>
                <img style={{width:"120px", height:"50px"}} src={playstoreImage} alt="" />
            </div>
            <div className="gambar1"> 
                <img style={{width:"500px", height:"640px"}} src={quickwashImage} alt="" />
            </div>
        </div>
        <br />
        <BasicExample />
        <Profit />
        <Kategori />
        <br />
        <Testimoni />
        <Footer />
    </div>
    )   
}

export default LandingPage;

    