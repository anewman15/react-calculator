/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopNav = () => (
  <div>
    <Navbar bg="success" expand="lg">
      <Navbar.Brand className="text-white font-weight-bolder" href="#home">No Magic - Dumb Calculator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-white">
          <Nav.Link className="text-white" href="#home">Home</Nav.Link>
          <Nav.Link className="text-white" href="#link">Calculator</Nav.Link>
          <Nav.Link className="text-white" href="#link">Quote of the Day</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default TopNav;