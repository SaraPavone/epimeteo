import React from "react";
import { Navbar, Container, Nav, Form, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MyNavbar = function () {
  const location = useLocation();
  console.log("OBJECT LOCATION", location);

  const [linkUrls] = useState([
    { path: "/", name: "Home" },
    { path: "/meteo", name: "Meteo" },
  ]);

  const addActiveOrNot = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="w-100">
      <Container fluid className="mx-1">
        <Navbar.Brand as={Link} to="/" className="text-decoration-none fst-italic fw-bold ">
        <img src="8504201.jpg" alt="logo" className="logo" />
          Epimeteo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="m-0">
          <Nav className="mx-3 my-0 ">
            {linkUrls.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={addActiveOrNot(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
