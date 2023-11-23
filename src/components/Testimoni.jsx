import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pp1Image from '../assets/images/ldp/pp1.png'
import pp2Image from '../assets/images/ldp/pp2.png'
import pp3Image from '../assets/images/ldp/pp3.png'

function Testimoni() {
  return (
    <div>
    <h4 style={{textAlign:"center",}}>Testimoni</h4>
   <hr style={{width:"100px", marginLeft:"46%", color:"orangered"}} />
    <br />
    <div className='Cardstest'>
      <div className='card1test'>
      <Card style={{ width: '230px' }}>
        <Card.Img style={{width:"55px", height:"55px", marginLeft:"90px", marginTop:"5px"}} variant="top" src={pp1Image} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Cepat</Card.Title>
          <Card.Text style={{textAlign:"center"}} >
            Minimamalisi waktu yang diterapkan oleh perkerja pada layanan ini membuat kinerja yang dilakukan lebih cepat dan efektif.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='card2test'>
      <Card style={{ width: '250px' }}>
        <Card.Img style={{width:"55px", height:"55px", marginLeft:"99px", marginTop:"8px" }} variant="top" src={pp2Image} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Pemesanan</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
          Fitur booking yang tersedia membuat pelanggan lebih leluasa untuk menjadwalkan pemesanan yang sesuai dengan kebutuhan mereka.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='card3test'>
      <Card style={{ width: '250px' }}>
        <Card.Img style={{width:"55px", height:"55px", marginLeft:"99px", marginTop:"8px" }} variant="top" src={pp3Image} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Bersih</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
          Hasil yang lebih memuaskan dengan menggunakan sistem pembersihan modern. 
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

export default Testimoni;