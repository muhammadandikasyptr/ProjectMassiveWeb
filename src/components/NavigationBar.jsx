import { Navbar, Container, Nav } from "react-bootstrap"
import logoImage from "../assets/Images/logo/Brand.png"
const NavigationBar = () => {
    return (
    <div> 
        <Navbar>
            <Container>
                <Navbar.Brand> 
                    <img style={{width:"120px", marginLeft:"100px"}} src={logoImage} alt="" /  >
                </Navbar.Brand>
                    <Nav style={{textAlign:"right", marginLeft:"40px", fontSize:"18px", marginTop:"5px"}}>
                        <Nav.Link style={{marginRight:"18px", color:"white"}}>Beranda</Nav.Link>   
                        <Nav.Link style={{marginRight:"18px", color:"white"}}>Pemesanan</Nav.Link>   
                        <Nav.Link style={{marginRight:"18px", color:"white"}}>Blog</Nav.Link>   
                        <Nav.Link style={{marginRight:"18",color:"white"}}>Tentang Kami</Nav.Link>   
                        <Nav.Link style={{marginRight:"18px", color:"white"}}>Hubungi Kami</Nav.Link>   
                        <Nav.Link style={{marginRight:"18px",color:"white"}}>Masuk</Nav.Link>   
                        <button style={{WebkitBorderRadius:"30px", width:"160px", height:"40px", backgroundColor:"tomato", color:"white"}}>Daftar</button>
                    </Nav>
            </Container>
        </Navbar>
    </div>
    )
    
}

export default NavigationBar