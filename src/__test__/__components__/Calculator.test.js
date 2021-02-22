/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import pretty from 'pretty';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  it('should render a display and button panel', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });

  describe('display', () => {
    let wrapper;
    let displayText;
    let btnAC;
    beforeEach(() => {
      wrapper = mount(<Calculator />);
      btnAC = wrapper.find('#btn-(AC)');
    });

    afterEach(() => {
      btnAC.simulate('click');
    });

    it('sets the display to zero when AC is clicked', () => {
      btnAC.simulate('click');
      displayText = wrapper.find('.display-text');
      expect(displayText.text()).toBe('0');
    });
  });
});
