import {} from "react-bootstrap"
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Maps = () => {
    return (
        <div className="konten">
            <h4  style={{textAlign:"center"}}>Temukan Kami</h4>
            <hr style={{width:"100px", marginLeft:"46%", color:"orangered"}} />
            <p style={{textAlign:"center", fontSize:"15px"}}>Temukan jasa QuickWash di dekat anda! Cari tahu dan buat pengalaman berkendaraan anda lebih menyenangkan.</p>
        {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311709235512!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1672408575523!5m2!1sen!2sid"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map" 
        style={{width:"100%",height:"300px"}}></iframe> */}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311709235512!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1672408575523!5m2!1sen!2sid"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"style={{width:"100%",height:"300px"}} ></iframe>
        </div>
    )
}

export default Maps