import React from 'react';
import { shallow } from 'enzyme';
import GenerateButton from './index';

test('<GenerateButton />', () => {
  const props = {
    generatingValue: '123',
    onAddPhoneNumber: jest.fn()
  }
  const wrapper = shallow(<GenerateButton {...props} />);
  expect(wrapper).toMatchSnapshot()
})
