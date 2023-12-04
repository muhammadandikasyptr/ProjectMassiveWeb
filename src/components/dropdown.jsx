import Dropdown from 'react-bootstrap/Dropdown';

function Pengaturan() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Pengaturan
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Akun Saya</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3"></Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Pengaturan;