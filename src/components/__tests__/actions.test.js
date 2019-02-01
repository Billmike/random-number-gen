import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../redux/action/numbersAction';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

test('should ', async () => {
  const expectedActions = [
    {
      type: 'ADD_NUMBERS',
      phoneNumber: {
        id: 1,
        userPhoneNumber: 23456789
      }
    }
  ];
  const store = mockStore({ data: [] });
  await store.dispatch(actions.addNumbers({ id: 1, userPhoneNumber: 23456789 }));
  expect(store.getActions()).toEqual(expectedActions)
})

test('should ', async () => {
  const expectedActions = [
    {
      type: 'SORT_NUMBERS_ASCENDING',
    }
  ];
  const store = mockStore({ data: [] });
  await store.dispatch(actions.sortNumbersAscending());
  expect(store.getActions()).toEqual(expectedActions);
});

test('should ', async () => {
  const expectedActions = [
    {
      type: 'SORT_NUMBERS_DESCENDING'
    }
  ];
  const store = mockStore({ data: [] });
  await store.dispatch(actions.sortNumbersDescending());
  expect(store.getActions()).toEqual(expectedActions);
})

