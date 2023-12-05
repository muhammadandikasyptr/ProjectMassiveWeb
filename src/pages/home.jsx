import {} from "react-bootstrap";
import quickwashImage from "../assets/images/ldp/quickwash.png";
import playstoreImage from "../assets/images/ldp/playstore.png";
import BasicExample from "../components/layananKami";
// import Profit2 from "../components/kelebihanqw";
import Profit2 from "../components/profit2";
import Kategori from "../components/kategori";
import Testimoni from "../components/Testimoni";
import Footer from "../components/footer";
import "../style/landingPage.css";
import NavigationBar from "../components/Navbar";
import Maps from "../components/maps";

const Home = () => {
  return (
    <div className="home" id="home">
      <NavigationBar />
      <div className="kotak2">
        <div
          style={{
            marginLeft: "100px",
            marginTop: "0px",
            color: "white",
            width: "400px",
          }}
        >
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
          <img
            style={{ width: "120px", height: "50px" }}
            src={playstoreImage}
            alt=""
          />
        </div>
        <div className="gambar1">
          <img
            style={{ width: "500px", height: "640px" }}
            src={quickwashImage}
            alt=""
          />
        </div>
      </div>
      <br />
      <BasicExample />
      <Profit2 />
      <Kategori />
      <br />
      <Testimoni />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
