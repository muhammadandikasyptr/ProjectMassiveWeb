import {} from "react-bootstrap"
import Navbar from "../components/Navbar"
// import quickwashImage from "../assets/images/ldp/quickwash.png"
// import playstoreImage from "../assets/images/ldp/playstore.png"
// import NavigationBar from "../components/NavigationBar"
// import BasicExample from "../components/layananKami"
// import Profit from "../components/kelebihanqw"
// import Kategori from "../components/kategori"
// import Testimoni from "../components/Testimoni"
import Footer from "../components/footer"
import aboutImage1 from "../assets/images/ldp/imgAbout1.png" 
import aboutImage2 from "../assets/images/ldp/imgAbout2.png" 
import aboutImage3 from "../assets/images/ldp/imgAbout3.png" 


const TentangKami = () => {
    return (
    <div className="TentangKami" id="TentangKami">
        <Navbar />
        <br />
        <br />
        <div className="container" style={{display:"flex", width:"100%"}}>
                <div className="left-content" style={{marginLeft:"60px", marginTop:"0px", color:"black", width:"400px"}}>
                    <h1> Quick Wash cuci <br /> Motor & Mobil</h1>
                    <br />
                        <p style={{fontFamily:'sans-serif'}}>
                        QuickWash merupalan platform on demand service di bidang kebersihan dan perawatan kendaraan home service, yang bertujuan untuk menciptakan kemudahan dengan mempertemukan pemilik kendaraan dengan tenaga terlatih dan terpercaya. 
                        <br /> 
                        <br />
                        QuickWash! hadir dengan inspirasi yang berasal dari keterbatasan waktu masyarakat perkotaan dalam merawat kendaraannya,
                        sehingga kami hadir menjadi solusi pemilik kendaraan untuk
                        mempercayakan kebersihan kendaraannya agar tetap nyaman di tengah
                        kesibukan.
                        </p>        
                    </div>
                <div className="right-content"> 
                    <img style={{ height: "570px", width: "500px" }} src={aboutImage1} alt="" />
                        </div>
            </div> 
            <br />
            <br />
            <div className="container" style={{display:"flex", width:"100%"}}>
                <div className="left-content" style={{marginLeft:"60px", marginTop:"0px", color:"black", width:"400px"}}>
                <img style={{ height: "480px", width: "480px" }} src={aboutImage2} alt="" />       
                    </div>
                <div className="right-content"> 
                <h1 style={{fontFamily:"sans-serif", fontSize:"30px"}}><b>Tujuan Quick Wash</b></h1>
                <br />
                <br />
                        <p>
                        Tujuan utama Quick Wash adalah menyediakan layanan cuci mobil berlangganan yang lebih nyaman kepada pelanggan. Mobiklin berfokus pada customer yang aware terhadap kondisi kendaraannya dan ingin mendapatkan pelayanan yang maksimal.
                       <br /> 
                       <br />
                       Selain menyediakan berbagai layanan cuci mobil di rumah yang bisa dipilih berdasarkan paket berlangganan, Mobiklin juga ingin berkontribusi secara aktif kepada banyak orang, terutama bagi mereka yang memiliki keahlian di bidang jasa cuci mobil, detailing mobil dan urusan perawatan kendaraan. Mobiklin membuka lapangan kerja yang lebih luas kepada mereka yang memiliki keahlian tersebut.
                        </p>        
                </div>
            </div> 
            <br />
            <div className="container" style={{display:"flex", width:"100%"}}>
                <div className="left-content" style={{marginLeft:"60px", marginTop:"0px", color:"black", width:"400px"}}>
                <h1 style={{fontFamily:"sans-serif", fontSize:"20px"}}><b>Perbedaan Quick Wash 
                   <br /> dengan jasa cuci mobil dan motor lain</b></h1>   
                <p>Perbedaan utama adalah kualitas, kami menjamin bahwa pekerjaan yang kami lakukan berdasarkan SOP yang dirancang khusus untuk kualitas cuci mobil yang lebih optimal. 
                   <br />
                   <br /> Selain menggunakan cairan pembersih premium, kami mengutamakan layanan cuci mobil berlangganan. Opsi berlangganan ini kami tawarkan untuk mengubah mind set customer tentang membersihkan mobil yang hanya dilakukan sekali ketika mobil benar-benar kotor. Konsep cuci mobil berlangganan ini pun disediakan lewat berbagai paket yang bisa dipilih dan diatur sesuai keinginan customer.</p>   
                    </div>
                <div className="right-content"> 
                <img style={{ height: "480px", width: "480px" }} src={aboutImage3} alt="" />       
                </div>
            </div> 
        <Footer />
    </div>
    )   
}

export default TentangKami;