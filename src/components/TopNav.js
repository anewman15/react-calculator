/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopNav = () => (
  <div>
    <Navbar bg="success" expand="lg">
      <Navbar.Brand className="text-white font-weight-bolder" href="/">Over the Counter Calculator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-white">
          <Nav.Link key="home" className="text-white" href="/">Home</Nav.Link>
          <Nav.Link key="calculator" className="text-white" href="/calculator">Calculator</Nav.Link>
          <Nav.Link key="quote-of-the-day" className="text-white" href="/quote-of-the-day">Quote of the Day</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default TopNav;