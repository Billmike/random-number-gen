import reducer, { defaultState } from '../../redux/number';

test('should return default state if no action is passed', () => {
  expect(reducer(undefined, {})).toEqual(defaultState)
})

test('should trigger the add number action', () => {
  expect(reducer(defaultState, {
    type: 'ADD_NUMBERS',
    phoneNumber: [{
      id: 1,
      userPhoneNumber: 234567890
    }]
  })).toEqual({data: [{id: 1, userPhoneNumber: 234567890}]})
});

test('should trigger the ascending filter action', () => {
  const reducerData = {
    data: [
      {
        id: 1,
        userPhoneNumber: 12345678
      },
      {
        id: 2,
        userPhoneNumber: 23456789
      }
    ]
  }
  expect(reducer(reducerData, {
    type: 'SORT_NUMBERS_ASCENDING',
  })).toEqual({
    data: [
      {
        id: 1,
        userPhoneNumber: 12345678
      },
      {
        id: 2,
        userPhoneNumber: 23456789
      }
    ]
  })
})

test('should trigger the descending filter action', () => {
  const reducerData = {
    data: [
      {
        id: 1,
        userPhoneNumber: 12345678
      },
      {
        id: 2,
        userPhoneNumber: 23456789
      }
    ]
  }
  expect(reducer(reducerData, {
    type: 'SORT_NUMBERS_DESCENDING',
  })).toEqual({
    data: [
      {
        id: 2,
        userPhoneNumber: 23456789
      },
      {
        id: 1,
        userPhoneNumber: 12345678
      }
    ]
  })
})

