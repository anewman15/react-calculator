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
      const btnTwo = wrapper.find('#btn-(2)');
      const btnFive = wrapper.find('#btn-(5)');
      btnTwo.simulate('click');
      btnFive.simulate('click');
    });

    afterEach(() => {
      btnAC.simulate('click');
    });

    it('sets the display to zero when AC is clicked', () => {
      btnAC.simulate('click');
      displayText = wrapper.find('.display-text');
      expect(displayText.text()).toBe('0');
    });

    it('adds a digit when a digit is clicked', () => {
      const btnZero = wrapper.find('#btn-(0)');
      btnZero.simulate('click');
      displayText = wrapper.find('.display-text');
      expect(displayText.text()).toContain('0');
    });
  });
});
