import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import blog1 from "../assets/images/ldp/blog1.png";
import blog2 from "../assets/images/ldp/blog2.png";
import blog3 from "../assets/images/ldp/blog3.png";
import blog4 from "../assets/images/ldp/blog4.png";
import blog5 from "../assets/images/ldp/blog5.png";
import blog6 from "../assets/images/ldp/blog6.png";
import blog7 from "../assets/images/ldp/blog7.png";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ display: "flex", width: "100%" }}>
        <div
          className="left-content"
          style={{
            marginLeft: "60px",
            marginTop: "0px",
            color: "black",
            width: "400px",
          }}
        >
          <h1>Postingan blog terbaru</h1>
          <img style={{ height: "280px", width: "auto" }} src={blog1} alt="" />
        </div>
        <div className="right-content">
          <p>11 November 2023</p>
          <h1 style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
            <b>Seberapa sering kendaraan harus dicuci?</b>
          </h1>
          <br />
          <p>
            Kebersihan kendaraan bukan hanya masalah estetika, tetapi juga
            berkaitan dengan pemeliharaan dan perlindungan terhadap
            elemen-elemen lingkungan yang dapat merusak cat dan permukaan
            kendaraan. Frekuensi mencuci kendaraan sebaiknya disesuaikan dengan
            faktor-faktor seperti cuaca, lingkungan tempat parkir, dan
            penggunaan kendaraan.
          </p>
          <Button variant="warning" type="submit">
            Read More
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ textAlign: "center", width: "150px" }}>
          <img style={{ height: "150px", width: "auto" }} src={blog2} alt="" />
          <p>Kenapa kendaraan perlu dibersihkan?</p>
        </div>
        <div style={{ textAlign: "center", width: "150px" }}>
          <img style={{ height: "150px", width: "auto" }} src={blog3} alt="" />
          <p>Apa yang menyebabkan kendaraan mudah berkarat</p>
        </div>
        <div style={{ textAlign: "center", width: "150px" }}>
          <img style={{ height: "150px", width: "auto" }} src={blog4} alt="" />
          <p>Ini alasan kenapa kendaraan anda harus rutin dibersishkan</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ textAlign: "center", width: "150px" }}>
          <img style={{ height: "150px", width: "auto" }} src={blog5} alt="" />
          <p>Cek mobil keluaran terbaru 2023</p>
        </div>
        <div style={{ textAlign: "center", width: "150px" }}>
          <img style={{ height: "150px", width: "auto" }} src={blog6} alt="" />
          <p>Ini penyebab kebanyakan orang malas mencuci kendaraan sendiri</p>
        </div>
        <div style={{ textAlign: "center", width: "150px" }}>
          <img style={{ height: "150px", width: "auto" }} src={blog7} alt="" />
          <p>Lihat perbedaan steam</p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="warning" type="submit">
          Previous Blog
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
