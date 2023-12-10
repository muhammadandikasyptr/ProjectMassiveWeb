import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import LogoImage2 from "../assets/images/Logo/logo2.png";

const Loginawal = () => {
  const [loginType, setLoginType] = useState("user");

  const handleLoginUser = () => {
    console.log("User login logic");
  };

  const handleLoginAdmin = () => {
    console.log("Admin login logic");
  };

  return (
    <div
      className="login"
      style={{ display: "flex", justifyContent: "center" }}
      id="login"
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          <b>Login</b>
        </h1>
        <br />
        <div style={{ marginBottom: "20px" }}>
          <Link to="/login">
            <Button
              style={{ backgroundColor: "orangered", marginRight: "10px" }}
              className="button4"
              type="button"
              onClick={() => {
                setLoginType("user");
                handleLoginUser();
              }}
            >
              Login User
            </Button>
          </Link>
        </div>
        <div>
          <Button
            style={{ backgroundColor: "orangered" }}
            className="button4"
            type="button"
            onClick={() => {
              setLoginType("admin");
              handleLoginAdmin();
            }}
          >
            Login Admin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Loginawal;
