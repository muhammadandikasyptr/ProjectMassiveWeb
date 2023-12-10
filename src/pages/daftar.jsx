import React from "react";
import { Form, Button } from "react-bootstrap";
import LogoImage2 from "../assets/images/Logo/logo2.png";
import { Link } from "react-router-dom";

const Daftar = () => {
  return (
    <div
      className="daftar"
      style={{ display: "flex", justifyContent: "center" }}
      id="daftar"
    >
      <div
        className="content-kanan"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderBottomLeftRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      >
        <img style={{ width: "500px" }} src={LogoImage2} alt="" />
      </div>
      <div
        className="content-kiri"
        style={{
          backgroundColor: "white",
          marginLeft: "10px",
          padding: "30px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          width: "500px",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
            textAlign: "center",
            fontSize: "40px",
            marginTop: "30px",
          }}
        >
          <b>Daftar</b>{" "}
        </h1>
        <br />

        <Form>
          <Form.Group
            style={{ marginTop: "20px" }}
            className="mb-3"
            controlId="namadepan"
          >
            <Form.Control type="text" placeholder="Nama Depan" />
          </Form.Group>

          <Form.Group
            style={{ marginTop: "20px" }}
            className="mb-3"
            controlId="namabelakang"
          >
            <Form.Control type="text" placeholder="Nama Belakang" />
          </Form.Group>

          <Form.Group
            style={{ marginTop: "20px" }}
            className="mb-3"
            controlId="email"
          >
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group
            style={{ marginTop: "20px" }}
            className="mb-3"
            controlId="password"
          >
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Daftar
          </Button>
        </Form>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <span
            style={{
              borderBottom: "1px solid #aaa",
              display: "inline-block",
              padding: "0 10px",
            }}
          >
            or
          </span>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="outline-dark" style={{ width: "100%" }}>
            Sign up with Google
          </Button>
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button variant="outline-warning" style={{ width: "100%" }}>
            Sign up with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
