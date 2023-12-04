import {} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  LogoImage2 from "../assets/images/Logo/logo2.png"
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Login = () => {
    return (   
   <div className="login" style={{display:"flex", justifyContent:"center"}} id="login">
     <div className="content-kanan" style={{backgroundColor:"white",padding:"20px", borderBottomLeftRadius:"10px", borderTopLeftRadius:"10px"}}>
        <img style={{width:"500px"}} src={LogoImage2} alt="" />
     </div>
     <div className="content-kiri" style={{backgroundColor:"white", marginLeft:"10px", padding:"30px", borderTopRightRadius:"10px", borderBottomRightRadius:"10px",width:"500px"}}>
        <h1 style={{fontFamily:"sans-serif", textAlign:"center", fontSize:"40px",marginTop:"30px"}}><b>Masuk</b> </h1>
        <br />

            <Form>
            <Form.Group style={{marginTop:"20px"}} className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Nama</Form.Label> */}
                <Form.Control type="email" placeholder="Masukkan Nama Anda" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group style={{marginTop:"30px"}} className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control  type="password" placeholder="Masukkan Password Anda" />
            </Form.Group>
            <p style={{fontFamily:"sans-serif", fontSize:"14px", textAlign:"center", color:"orangered", marginTop:"30px", marginBottom:"30px"}}>Lupa Password?</p>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <div style={{display:"flex"}}>
            <Link to="/home">
            <Button style={{backgroundColor:"orangered"}} className="button4" type="submit">
              Masuk
            </Button>
          </Link>
          <Link to="/">
            <Button className="button5" type="on-click">
              Kembali
            </Button>
          </Link>
            {/* <a href=""><Button className="button4" type="submit">Masuk</Button></a>
            <a href=""><Button className="button5" type="on-click">Kembali</Button></a> */}
            </div>
            <br />
            <p style={{fontFamily:"sans-serif", fontSize:"12px", textAlign:"center"}}>belum punya akun? <a className="signup" style={{textDecoration:"none"}} href="#">Sign Up</a></p>
            </Form>
    </div>
    
</div>
  )
}

export default Login;
    