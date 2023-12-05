import {} from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Footer from "../components/footer";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import "../style/landingPage.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Booking = () => {
    return (
        <div className="booking">
        <NavigationBar />
        <br />
            <h2 style={{textAlign:"center", fontFamily:"unset"}}>Lengkapi Pesanan Anda</h2>
            <br />
            <div className="formBooking" style={{marginLeft:"150px"}}>
                <h4>Detail Pesanan</h4>
                <br />
            <Form.Label htmlFor="inputName" style={{marginLeft:"50px", marginRight:"50px"}} >Nama</Form.Label>
                <Form.Control style={{marginLeft:"50px", marginRight:"50px", width:"750px"}}
                    type="text"
                    id="inputname"
                    aria-describedby="nameHelpBlock"
                />
            <br />
            <div className="form2" style={{display:"flex"}}>

            <div className="kotakOne">
            <Form.Label htmlFor="inputNo.hp" style={{marginLeft:"50px", marginRight:"50px"}} >No. Hp</Form.Label>
                <Form.Control style={{marginLeft:"50px", marginRight:"50px", width:"400px"}}
                    type="text"
                    id="inputnoHp"
                    aria-describedby="noHpHelpBlock"
                />
            </div>
            <div className="kotakTwo">
            <Form.Label htmlFor="inputlayanan" style={{marginLeft:"5px", marginRight:"50px"}} >Jenis Layanan</Form.Label>
            <Form.Select style={{width:"300px"}} aria-label="Default select example" id="inputlayanan">
                <option>pilih jenis layanan</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
            </Form.Select>
            </div>
            </div>
            <br />
            <div className="form3" style={{display:"flex"}}>
                <div className="kotakThree" style={{marginLeft:"50px", marginTop:"40px"}}>
                    <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check style={{marginRight:"50px"}}
                            inline
                            label="Mobil"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Motor"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
                    </Form>
                </div>
                <div className="kotakFor">
                {/* <Form.Label htmlFor="inputlayanan" style={{marginLeft:"5px", marginRight:"50px"}} >jenis layanan</Form.Label> */}
                    <Form.Select style={{width:"200px", marginTop:"35px"}} aria-label="Default select example" id="inputlayanan">
                        <option>pilih waktu</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </Form.Select>
                </div>
                <div className="kotakFive">
                <Form.Label htmlFor="inputTanggal" style={{marginLeft:"50px", marginRight:"50px"}} >Pilih Tanggal</Form.Label>
                    <Form.Select style={{width:"300px", marginTop:"2px", marginLeft:"50px"}} aria-label="Default select example" id="inputTanggal">
                        <option>pilih waktu</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </Form.Select>
                </div>
            </div>
            <br />
            <div className="form4" style={{display:"flex"}}>
                <div className="kotaksix" style={{marginLeft:"50px", marginRight:"50px", width:"400px"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Spesial Request</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </div>
                <div className="kotakFive">
                <Form.Label htmlFor="inputE-wallet" style={{marginLeft:"0px", marginRight:"50px"}} >E-Wallet</Form.Label>
                    <Form.Select style={{width:"300px", marginTop:"2px", marginLeft:"0px"}} aria-label="Default select example" id="inputE-wallet">
                        <option>pilih pembayaran</option>
                        <option value="1">Dana</option>
                        <option value="2">Go Pay</option>
                        <option value="3">Ovo</option>
                    </Form.Select>
                </div>
            </div>
            </div>
            <br />
            <div className="pembayaran">
                <div className="formBooking2" style={{marginLeft:"150px"}}>
                    <h4>Pembayaran dan Konfirmasi</h4>
                    <Form style={{marginLeft:"30px", marginTop:"30px"}}>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="saya setuju dengan ketentuan yang berlaku"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            </div>
                        ))}
                     </Form>
                     <br />
                     <h4>Total Harga</h4>
                     <br />
                     <h6>Mobil      : Rp. 35.000</h6>
                     <h6>Motor      : Rp. 15.000</h6>
                     <br />
                     <p style={{textAlign:"center"}}>terimakasih telah mempercayai jasa layanan kami, Mohon Tunggu.. Pesanan Anda akan segera diproses</p>
                     

                </div>
             </div>
             <br />
             <Footer />
        </div>
    )
}

export default Booking;