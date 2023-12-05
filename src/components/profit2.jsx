import {} from "react-bootstrap"
import quickwashImage2 from '../assets/images/ldp/quickwash2.png'
import ceklisImage from '../assets/images/ldp/ceklis.png'
import { Link } from "react-router-dom"

const Profit2 = () => {
    return(
        <div className='lebih' style={{textAlign:"center"}}>
            <h4>Kelebihan</h4>
            <hr style={{width:"100px", marginLeft:"46%", color:"orangered"}} />
            <div className="content"> 
                <div style={{marginTop:"0px"}} className='qw2'>
                    <img style={{ width:"630px",height:"730", marginLeft:"10px"}} src={quickwashImage2} alt="" />
                </div>
                <div style={{marginTop:"14%", marginLeft:"50px" }} className='point'>
                    <div style={{display:"flex"}}>
                        <img style={{marginBottom:"20px", width:"90px"}} src={ceklisImage} alt="" />
                        <h5 style={{marginTop:"25px", marginLeft:"25px"}}>Kualitas sistem terjamin</h5>
                    </div>
                        <br />
                    <div style={{display:"flex"}}>
                        <img style={{marginBottom:"40px", width:"90px"}}  src={ceklisImage} alt="" />
                        <h5 style={{marginTop:"25px", marginLeft:"25px"}}>Jadwalkan pemesanan</h5>
                    </div>
                        <br />
                    <div style={{display:"flex"}}>
                        <img style={{marginBottom:"40px", width:"90px"}}  src={ceklisImage} alt="" />
                        <h5 style={{marginTop:"25px", marginLeft:"25px"}}>Kemudahan pembayaran</h5>
                    </div>
                        <br />
                       <Link to="/pemesanan"> <button className="button2">Dapatkan layanan kami segera</button></Link>
            </div>
            </div>
        </div>
    )
}

export default Profit2;