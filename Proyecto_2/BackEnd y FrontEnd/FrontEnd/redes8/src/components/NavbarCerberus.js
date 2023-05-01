import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavbarCerberus() {
  
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
            <LinkContainer to={"/Cerbero/FrontEnd/Administrador"} className='linkref'>
              <NavDropdown.Item style={{ textDecoration: "none", color: "black" }}>Administrador</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={"/Cerbero/FrontEnd/Desarrollador"} className='linkref'>
              <NavDropdown.Item style={{ textDecoration: "none", color: "black" }}>Desarrollador</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={"/Cerbero/FrontEnd/Publica"} className='linkref'>
              <NavDropdown.Item style={{ textDecoration: "none", color: "black" }}>Funcion Publica</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={"/Cerbero/FrontEnd/Economia"} className='linkref'>
              <NavDropdown.Item style={{ textDecoration: "none", color: "black" }}>Desarrollo Economico</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCerberus;
