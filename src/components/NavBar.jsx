import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Radi Systems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Radi</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#ask">Qoute</Nav.Link>
            <Nav.Link href="#support">Support</Nav.Link>
            <Nav.Link href="http://radisystems.online:81">System</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
