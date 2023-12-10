import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImage from "../assets/Images/logo/Brand.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              style={{
                width: "180px",
                marginLeft: "30px",
                borderRadius: "50px",
              }}
              src={logoImage}
              alt=""
            />
          </Navbar.Brand>
          <Nav
            style={{
              textAlign: "right",
              marginLeft: "30px",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            <Nav.Link
              style={{ marginRight: "30px", color: "white" }}
              href="/loginawal"
            >
              Masuk
            </Nav.Link>
            <Link to="/daftar">
              <button
                className="button1"
                style={{
                  WebkitBorderRadius: "30px",
                  width: "160px",
                  height: "40px",
                  color: "white",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                Daftar
              </button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
