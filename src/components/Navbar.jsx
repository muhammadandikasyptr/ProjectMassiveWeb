import { Navbar, Container, Nav } from "react-bootstrap"
import logoImage from "../assets/Images/logo/Brand.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons"
const NavigationBar = () => {
    return (
    <div> 
        <Navbar>
            <Container>
                <Navbar.Brand> 
                    <img style={{width:"140px", marginLeft:"70px"}} src={logoImage} alt="" /  >
                </Navbar.Brand>
                    <Nav style={{textAlign:"right", marginLeft:"30px", fontSize:"18px", marginTop:"5px"}}>
                        <Nav.Link style={{marginRight:"30px", color:"white"}} href="#beranda">Beranda</Nav.Link>   
                        <Nav.Link style={{marginRight:"30px", color:"white"}} href="#Pemesanan">Pemesanan</Nav.Link>   
                        <Nav.Link style={{marginRight:"30px", color:"white"}} href="#Blog">Blog</Nav.Link>   
                        <Nav.Link style={{marginRight:"30px",color:"white"}} href="#TentangKami">Tentang Kami</Nav.Link>   
                        <Nav.Link style={{marginRight:"30px", color:"white"}} href="Hubungi Kami">Hubungi Kami</Nav.Link>    
                        <FontAwesomeIcon style={{marginTop:"12px", color:"orangered"}} icon = {faUserAstronaut}></FontAwesomeIcon>
                        <Nav.Link style={{marginRight:"30px",color:"white", marginLeft:"10px"}}href="#"><b>Account</b></Nav.Link>   
                    </Nav>
            </Container>
        </Navbar>
    </div>
    )
    
}

export default NavigationBar