import React from 'react';
import renderer from 'react-test-renderer'
import Paginate from '.';

test('<Pagination />', () => {
  const component = renderer.create(<Paginate />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
