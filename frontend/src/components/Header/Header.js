import React from "react";
import "./Header.css";
import { Container, Navbar, NavDropdown, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Notes App</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="btn-primary" />
          <Navbar.Collapse id="navbarScroll" className="my-3">
            <Form className="d-flex header_form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav>
              <Nav.Link href="/mynotes">
                My Notes
              </Nav.Link>
              <NavDropdown title="Rakesh Rengaraj" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
