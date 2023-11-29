import { Container, Button, Form, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import contact1 from "../assets/images/ldp/contact1.png";
import contact2 from "../assets/images/ldp/contact2.png";
import contact3 from "../assets/images/ldp/contact3.png";

const Hubungikami = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url("src/assets/images/ldp/contact.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
        }}
      >
        <Container>
          <div className="text-center">
            <h1>Contact Informations</h1>
            <p>
              Hubungi kami untuk menyelesaikan <br /> kendala yang anda alami.
            </p>
            <Button variant="warning">Hubungi Kami</Button>
          </div>
        </Container>
      </div>

      <Container
        className="container"
        style={{ display: "flex", width: "100%" }}
      >
        <div
          className="left-content"
          style={{
            marginLeft: "60px",
            marginTop: "0px",
            color: "black",
            width: "400px",
          }}
        >
          <img
            style={{
              height: "80px",
              width: "auto",
              marginBottom: "50px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            src={contact1}
            alt=""
          />
          <img
            style={{
              height: "80px",
              width: "auto",
              marginBottom: "50px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            src={contact2}
            alt=""
          />
          <img
            style={{
              height: "80px",
              width: "auto",
              marginBottom: "50px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            src={contact3}
            alt=""
          />
        </div>
        <div
          className="right-content"
          style={{
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", // Add boxShadow property
          }}
        >
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Nama" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Alamat Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formPhone">
                  <Form.Control type="tel" placeholder="Nomor Telepon" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formSubject">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Pesan" />
            </Form.Group>

            <Button variant="warning" type="submit">
              Kirim Pesan
            </Button>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Hubungikami;
