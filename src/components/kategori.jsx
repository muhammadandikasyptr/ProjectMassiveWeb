import {} from "react-bootstrap"
import mobilImage from '../assets/images/ldp/mobil.png'
import motorImage from '../assets/images/ldp/motor.png'
import mobil1Image from '../assets/images/ldp/mobil1.png'
import motor1Image from '../assets/images/ldp/motor1.png'

const Kategori = () => {
    return(
        <div className="category" style={{textAlign:"center"}}>
        <h4>Kategori</h4>
        <hr style={{width:"100px", marginLeft:"46%", color:"orangered"}} />
        <div className="kategoriImage" style={{display:"flex", marginBottom:"5px"}}>
            <div className="mobilMotor">
                <img style={{width:"300px", height:"220px", marginLeft:"320px", marginRight:"5px"}} src={mobilImage} alt="" />
                <img style={{width:"300px", height:"220px", marginLeft:"2px", marginRight:"100px"}} src={motorImage} alt="" />
            </div>
        </div>
        <div className="mobil1Motor1"  style={{display:"flex"}} >
            <img style={{width:"300px", height:"220px", marginLeft:"320px", marginRight:"5px"}} src={mobil1Image} alt="" />
            <img style={{width:"300px", height:"220px", marginLeft:"2px", marginRight:"100px"}}   src={motor1Image} alt="" />
        </div>



        </div>
    )
}

export default Kategori;