import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link as HashLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={NavHashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={NavHashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={NavHashLink} to="/home#experts">
              Experts
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="info">Logout</Button>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
