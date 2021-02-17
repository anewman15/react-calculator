/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => (
  <div className="container container-fluid">
    <h1 className="text-center">Over the Counter Calculator</h1>
    <p className="display-5 my-4">
      This is one of the primitive calculators. Built with
      React. I'll probably improve it over time. Can be used
      for basic calculations using arithmatic oeprations:
    </p>
    <ul className="list-group w-25 mx-auto">
      <li className="list-group-item">Addition</li>
      <li className="list-group-item">Subtraction</li>
      <li className="list-group-item">Multiplication</li>
      <li className="list-group-item">Division</li>
      <li className="list-group-item">Percent Calculation</li>
    </ul>
    <div className="text-center my-4">
      <Button className="text-white" variant="success" href="/calculator">Try It Now</Button>
    </div>
  </div>
);

export default Home;