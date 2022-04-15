import React from "react";
import {Navbar , Nav} from "react-bootstrap";
import About from "../SubComponents/About";
import Contact from "../SubComponents/Contact";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Home() {
  return (
    <>
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"> My Page </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#about"> <About /> </Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="#contact"> <Contact /> </Nav.Link>
    </Nav>

  </Navbar>

  <hr />
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga harum, omnis voluptate quas id aspernatur ab magnam ducimus iure, expedita eius! Debitis, sapiente?</p>
    </>
  );
}

export default Home;