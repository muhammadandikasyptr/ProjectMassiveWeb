import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cepatImage from '../assets/images/ldp/cepat.png'
import bookingImage from '../assets/images/ldp/pemesanan.png'
import bersihImage from '../assets/images/ldp/bersih.png'
import pembayaranImage from '../assets/images/ldp/pembayaran.png'

function BasicExample() {
  return (
    <div>
    <h4 style={{textAlign:"center",}}>layanan Kami</h4>
   <hr style={{width:"100px", marginLeft:"46%", color:"orangered"}} />
    <br />
    <div className='Cards'>
      <div className='card1'>
      <Card style={{ width: '230px' }}>
        <Card.Img style={{width:"50px", height:"50px", marginLeft:"90px", marginTop:"8px"}} variant="top" src={cepatImage} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Cepat</Card.Title>
          <Card.Text style={{textAlign:"center"}} >
            Minimamalisi waktu yang diterapkan oleh perkerja pada layanan ini membuat kinerja yang dilakukan lebih cepat dan efektif.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='card2'>
      <Card style={{ width: '250px' }}>
        <Card.Img style={{width:"50px", height:"50px", marginLeft:"99px", marginTop:"8px" }} variant="top" src={bookingImage} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Pemesanan</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
          Fitur booking yang tersedia membuat pelanggan lebih leluasa untuk menjadwalkan pemesanan yang sesuai dengan kebutuhan mereka.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='card3'>
      <Card style={{ width: '250px' }}>
        <Card.Img style={{width:"50px", height:"50px", marginLeft:"99px", marginTop:"8px" }} variant="top" src={bersihImage} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Bersih</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
          Hasil yang lebih memuaskan dengan menggunakan sistem pembersihan modern. 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='card4'>
      <Card style={{ width: '250px' }}>
        <Card.Img style={{width:"50px", height:"50px", marginLeft:"99px", marginTop:"8px" }} variant="top" src={pembayaranImage} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Pembayaran</Card.Title>
          <Card.Text style={{textAlign:"center"}} >
          Kemudahan pembayaran yang dapat dilakukan oleh user secara online seperti menggunakan e-wallet
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default BasicExample;