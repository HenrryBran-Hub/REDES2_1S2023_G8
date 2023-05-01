import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function NavbarLogin() {
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cerberus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Opciones" id="basic-nav-dropdown" style={{ color: "white" }}>
            <NavDropdown.Item><Link to={"/Cerbero/FrontEnd/Administrador"} className='linkref' style={{ textDecoration: "none", color: "black" }}>Administrador</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={"/Cerbero/FrontEnd/Desarrollador"} className='linkref' style={{ textDecoration: "none", color: "black" }}>Desarrollador</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={"/Cerbero/FrontEnd/Publica"} className='linkref' style={{ textDecoration: "none", color: "black" }}>Funcion Publica</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={"/Cerbero/FrontEnd/Economia"} className='linkref' style={{ textDecoration: "none", color: "black" }}>Desarrollo Economico</Link></NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;