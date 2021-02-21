/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from 'react-dom';
import TopNav from '../../components/TopNav';

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

describe('TopNav', () => {
  it('should render a navigation bar at the top of the site', () => {
    const tree = renderer
      .create(<TopNav />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});