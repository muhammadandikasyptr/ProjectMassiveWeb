import { Navbar, Container, Nav } from "react-bootstrap"
import logoImage from "../assets/Images/logo/Brand.png"
const NavigationBar = () => {
    return (
    <div> 
        <Navbar>
            <Container>
                <Navbar.Brand> 
                    <img style={{width:"140px", marginLeft:"70px"}} src={logoImage} alt="" /  >
                </Navbar.Brand>
                    <Nav style={{textAlign:"right", marginLeft:"30px", fontSize:"18px", marginTop:"5px"}}>
                        <Nav.Link style={{marginRight:"17px", color:"white"}} href="#beranda">Beranda</Nav.Link>   
                        <Nav.Link style={{marginRight:"17px", color:"white"}} href="#Pemesanan">Pemesanan</Nav.Link>   
                        <Nav.Link style={{marginRight:"17px", color:"white"}} href="#Blog">Blog</Nav.Link>   
                        <Nav.Link style={{marginRight:"17px",color:"white"}} href="#TentangKami">Tentang Kami</Nav.Link>   
                        <Nav.Link style={{marginRight:"17px", color:"white"}} href="Hubungi Kami">Hubungi Kami</Nav.Link>   
                        <Nav.Link style={{marginRight:"17px",color:"white"}}href="#login" >Masuk</Nav.Link>   
                        <button className="button1" style={{WebkitBorderRadius:"30px", width:"160px", height:"40px", color:"white", fontSize:"16px", marginRight:"30px"}}>Daftar</button>
                    </Nav>
            </Container>
        </Navbar>
    </div>
    )
    
}

export default NavigationBar