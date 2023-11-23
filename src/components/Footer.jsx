import {} from "react-bootstrap"
import logoImage from "../assets/Images/logo/Brand.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="box" style={{display:"flex"}}>
                <div className="box1">
                    <img style={{width:"160px", marginLeft:"40px", marginTop:"5px"}} src={logoImage} alt="" />
                    <h5 style={{fontFamily:"sans-serif", fontSize:"15px", marginLeft:"45px", color:"white"}}>Subscribe Sekarang!</h5>
                        <div className="contentBox1" style={{display:"flex"}}>
                            <div className="fontawesome">
                                <FontAwesomeIcon style={{marginLeft:"45px"}} icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <div className="text">
                                <h5 style={{fontFamily:"sans-serif",fontSize:"14px", marginTop:"5px", color:"white", marginLeft:"5px"}}>Enter Your Email</h5>
                            </div>
                        </div>
                    <hr style={{color:"white", width:"180px", marginLeft:"45px"}} />
                    <button className="button3">Subscribe</button>
                    <br />
                    <br />
                </div>
                <div className="box2" style={{marginLeft:"100px", fontFamily:"sans-serif", color:"white"}}>
                    <h5 style={{marginTop:"90px"}}><b>informasi</b></h5>
                    <a style={{textDecoration:"none", color:"white"}} href=""><p style={{marginTop:"28px", fontSize:"13px"}}>Tentang Kami</p></a>
                    <a style={{textDecoration:"none", color:"white"}} href=""><p style={{marginTop:"0px", fontSize:"13px"}}>Hubungi Kami</p></a>
                </div>
                <div className="box3" style={{marginLeft:"120px", fontFamily:"sans-serif", color:"white"}}>
                    <h5 style={{marginTop:"90px"}}><b>HelpFull Link</b></h5>
                    <a style={{textDecoration:"none", color:"white"}} href=""><p style={{marginTop:"28px", fontSize:"13px"}}>Support</p></a>
                    <a style={{textDecoration:"none", color:"white"}} href=""><p style={{marginTop:"0px", fontSize:"13px"}}>privasi Policy</p></a>
                </div>
                <div className="box4" style={{marginLeft:"120px", fontFamily:"sans-serif", color:"white"}}>
                    <h5 style={{marginTop:"90px"}}><b>Our Service</b></h5>
                    <a style={{textDecoration:"none", color:"white"}} href=""><p style={{marginTop:"28px", fontSize:"13px"}}>Booking</p></a>
                    <a style={{textDecoration:"none", color:"white"}} href=""><p style={{marginTop:"0px", fontSize:"13px"}}>Blog</p></a>
                </div>
                <div className="box5" style={{marginLeft:"120px", fontFamily:"sans-serif", color:"white"}}>
                    <h5 style={{marginTop:"90px"}}><b>Contact Us</b></h5>
                        <div className="isibox5" style={{display:"flex"}}>
                            <div className="telepone">
                                <FontAwesomeIcon style={{marginTop:"10px"}} icon = {faPhone}></FontAwesomeIcon> 
                            </div>
                            <div className="nohp">
                                <h5 style={{fontSize:"14px", marginTop:"10px", marginLeft:"8px"}}>+62-8976-8976</h5>
                            </div>
                        </div>
                        <div className="isibox5lagi" style={{display:"flex"}}>
                            <div className="emailfooter">
                                <FontAwesomeIcon style={{marginTop:"10px"}} icon = {faEnvelope}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h5 style={{fontSize:"14px", marginTop:"10px", marginLeft:"8px"}}>quickwash@gmail.com</h5>
                            </div>
                            <br />
                            <div>
                                {/* <FontAwesomeIcon icon = {fabrandsFacebook}></FontAwesomeIcon>
                                <FontAwesomeIcon icon = {fabrandsInstagram}></FontAwesomeIcon>
                                <FontAwesomeIcon icon = {fabrandsTwiter}></FontAwesomeIcon> */}
                            </div>
                        </div>
                </div>
            </div>
            <br />
            <hr style={{width:"97%", color:"white", marginLeft:"20px"}} />
            <h4>
            <footer style={{fontFamily:"sans-serif", color:"whitesmoke", fontSize:"12px", textAlign:"center"}}>&copy; Copyright 2023 Quick Wash All Right Reserved</footer>
            </h4>
            <br />
        </div>
    )
}

export default Footer;