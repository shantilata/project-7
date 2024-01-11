import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'bootstrap';
const Header = () => {
  let nevigate = useNavigate()
  let clickHandler = (res) => {
    window.sessionStorage.clear()
    alert("Logout Done")
    nevigate();

  }
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Home </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/reg_form">Registration Form</Nav.Link>
                <Nav.Link as={Link} to="/login_form">Login Form</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/formik_page">Formik</Nav.Link>
                <Nav.Link as={Link} to="/formik_reg">Formik Reg</Nav.Link>

                <Nav.Link onClick={clickHandler}>Logout</Nav.Link>




              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header