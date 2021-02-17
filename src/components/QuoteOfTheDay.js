/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import Button from 'react-bootstrap/Button';

const QuoteOfTheDay = () => (
  <div className="w-75 mx-auto my-5">
    <div className="card">
      <div className="card-header display-4 font-weight-bold">
        Quote
      </div>
      <div className="card-body p-5">
        <blockquote className="blockquote mb-0">
          <p>The beauty of mathematics only shows itself to more patient followers</p>
          <footer className="blockquote-footer">Maryam Mirzakhani</footer>
        </blockquote>
      </div>
    </div>
    <div className="text-center my-4">
      <Button className="w-50 text-white" variant="success" href="/calculator">Let's Go Do Math</Button>
    </div>
  </div>
);

export default QuoteOfTheDay;