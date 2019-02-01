import React from 'react';
import { shallow } from 'enzyme';
import MaxMin from './index';

test('<MaxMin /> renders correctly', () => {
  const props = {
    numbers: []
  }

  const wrapper = shallow(<MaxMin {...props} />);
  expect(wrapper).toMatchSnapshot();
});

test('<MaxMin />', () => {
  const props = {
    numbers: [
      {userPhoneNumber: 1234566},
      {userPhoneNumber: 986945}
    ]
  }
  const wrapper = shallow(<MaxMin {...props} />);
  expect(wrapper).toMatchSnapshot()
})
