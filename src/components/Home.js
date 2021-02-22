/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Home = () => (
  <div className="container container-fluid">
    <h1 className="text-center mt-4">Over the Counter Calculator</h1>
    <p className="display-5 my-4">
      This is one of the primitive calculators. Built with
      React. I'll probably improve it over time. Can be used
      for basic calculations using arithmatic oeprations:
    </p>
    <ListGroup className="list-group w-25 mx-auto">
      <ListGroup.Item className="list-group-item">Addition</ListGroup.Item>
      <ListGroup.Item className="list-group-item">Subtraction</ListGroup.Item>
      <ListGroup.Item className="list-group-item">Multiplication</ListGroup.Item>
      <ListGroup.Item className="list-group-item">Division</ListGroup.Item>
      <ListGroup.Item className="list-group-item">Percent Calculation</ListGroup.Item>
    </ListGroup>
    <div className="text-center my-5">
      <Button className="text-white w-50" variant="success" href="/calculator">Try It Now</Button>
    </div>
  </div>
);

export default Home;