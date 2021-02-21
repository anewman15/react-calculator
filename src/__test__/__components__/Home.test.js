/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import pretty from 'pretty';
import Home from '../../components/Home';

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

describe('Home', () => {
  it('should render a Home page with information aboutt the app', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});
