import { Navbar, Container, Nav } from "react-bootstrap";
import logoImage from "../assets/Images/logo/Brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import Pengaturan from "./dropdown";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              style={{ width: "100px", marginLeft: "70px" }}
              src={logoImage}
              alt=""
            />
          </Navbar.Brand>
          <Nav
            style={{
              textAlign: "right",
              marginLeft: "30px",
              fontSize: "15px",
              marginTop: "5px",
            }}
          >
            <Nav.Link style={{ marginRight: "30px", color: "white" }} href="/home">
              Beranda
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: "30px", color: "white" }}
              href="/Pemesanan"
            >
              Pemesanan
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: "30px", color: "white" }}
              href="/Blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: "30px", color: "white" }}
              href="/TentangKami"
            >
              Tentang Kami
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: "30px", color: "white" }}
              href="/HubungiKami"
            >
              Hubungi Kami
            </Nav.Link>
            <div>
            <Pengaturan />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
