import React from 'react';
import { render, act, unmountComponentAtNode } from '@testing-library/react';
import pretty from 'pretty';
import Calculator from './Calculator';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
