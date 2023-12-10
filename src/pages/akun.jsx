import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Akun = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSave = () => {
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Profile Picture:", profilePicture);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div>
      <Navbar />
      <Container
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#3498db" }}
      >
        <Row>
          <Col md={6}>
            <div className="p-4 border rounded bg-white">
              <h2 className="mb-4 text-dark">Edit Profile Anda</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Nama Anda</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Alamat E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="dark"
                  className="mt-3"
                  onClick={() => console.log("Batal")}
                >
                  Batal
                </Button>{" "}
                <Button variant="warning" className="mt-3" onClick={handleSave}>
                  Simpan
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 border rounded bg-white">
              <Form.Group controlId="formProfilePicture">
                <Form.Label>Masukkan Foto</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Akun;
