import React from 'react';
import { shallow } from 'enzyme';
import DownloadButton from './index';

test('should ', () => {
  const props = {
    numbers: [],
    onDownloadPhoneNumbers: jest.fn()
  }
  const wrapper = shallow(<DownloadButton {...props} />);

  expect(wrapper).toMatchSnapshot()
})
