import React from 'react';
import { shallow } from 'enzyme';
import DisplayNumbers from './index';

test('<DisplayNumbers /> mounts correctly', () => {
  const props = {
    phoneNumbers: [
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456}
    ]
  };

  const wrapper = shallow(<DisplayNumbers {...props} />);

  expect(wrapper).toMatchSnapshot()
})

test('should verify the handlePageClick method is called correctly', () => {
  const props = {
    phoneNumbers: [
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456}
    ]
  };
  const phoneNumbers = [
    {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456}
  ]
  const wrapper = shallow(<DisplayNumbers {...props} />);
  const instance = wrapper.instance();
  wrapper.setState({ generatedPhoneNumbers: phoneNumbers });
  const data = {
    selected: ''
  }
  instance.handlePageClick(data);
  expect(wrapper.state().generatedPhoneNumbers).toEqual(phoneNumbers)
});

test('should test get derived state from props', () => {
  const props = {
    phoneNumbers: [
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
      {userPhoneNumber: 123456},
    ],
    hasGeneratedNumbers: true
  };
  const state = {
    currentPage: 1
  };

  const wrapper = shallow(<DisplayNumbers {...props} />);
  const result = DisplayNumbers.getDerivedStateFromProps(props, state);
})

