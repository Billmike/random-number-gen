import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Main } from './index';

jest.mock('file-saver', () => ({
  saveAs: jest.fn(),
}));

test('it should mount without crashing', () => {
  const props = {
    numbers: []
  }
  const component = renderer.create(<Main {...props} />);
  let test = component.toJSON();

  expect(test).toMatchSnapshot()
})

test('should verify the addPhoneNumber method handler is called correctly', () => {
  const props = {
    numbers: [],
    addNumbers: jest.fn()
  };
  const wrapper = shallow(<Main {...props} />);
  wrapper.setState({ generatingValue: 20 })
  const instance = wrapper.instance();
  instance.onAddPhoneNumber();

  expect(props.addNumbers).toHaveBeenCalled()
});

test('should verify the numbers are sorted in ascending order', () => {
  const props = {
    numbers: [],
    sortNumbersAscending: jest.fn(),
    sortNumbersDescending: jest.fn()
  };
  const wrapper = shallow(<Main {...props} />);
  const event = {
    target: {
      value: "Ascending"
    }
  };
  const instance = wrapper.instance();
  instance.onSortNumber(event);

  expect(props.sortNumbersAscending).toHaveBeenCalled()
})

test('should verify the numbers are sorted in descending order', () => {
  const props = {
    numbers: [],
    sortNumbersAscending: jest.fn(),
    sortNumbersDescending: jest.fn()
  };
  const wrapper = shallow(<Main {...props} />);
  const event = {
    target: {
      value: "Descending"
    }
  };
  const instance = wrapper.instance();
  instance.onSortNumber(event);

  expect(props.sortNumbersDescending).toHaveBeenCalled()
});

test('should verify the onGeneratingValue method is called and state is updated', () => {
  const props = {
    numbers: []
  };
  const wrapper = shallow(<Main {...props} />);
  const event = {
    target: {
      value: 20
    }
  };
  wrapper.setState({ generatingValue: '', hasGeneratedNumbers: false });
  const instance = wrapper.instance();
  instance.onGeneratingValueChange(event);

  expect(wrapper.state().generatingValue).toEqual(20);
  expect(wrapper.state().hasGeneratedNumbers).toBe(true);
})

test('should verify the onDownloadPhoneNumbers method is called correctly', () => {
  const props = {
    numbers: [
      {
        userPhoneNumber: 2345678
      },
      {
        userPhoneNumber: 8494343
      }
    ]
  }
  const wrapper = shallow(<Main {...props} />);
  const instance = wrapper.instance();

  instance.onDownloadPhoneNumbers();

  expect(wrapper).toMatchSnapshot()
})

