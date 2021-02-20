/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from 'react-dom';
import Main from './Main';

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

describe('Main', () => {
  it('should render the TopNav and the Home page of the site', () => {
    const tree = renderer
      .create(<Main />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});