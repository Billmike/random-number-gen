const ADD_NUMBERS = 'ADD_NUMBERS';
const SORT_NUMBERS_ASCENDING = 'SORT_NUMBERS_ASCENDING';
const SORT_NUMBERS_DESCENDING = 'SORT_NUMBERS_DESCENDING';

export const addNumbers = (phoneNumber) => {
  return (dispatch) => {
    dispatch({ type: ADD_NUMBERS, phoneNumber })
  }
}

export const sortNumbersAscending = () => {
  return (dispatch) => {
    dispatch({ type: SORT_NUMBERS_ASCENDING })
  }
}

export const sortNumbersDescending = () => {
  return (dispatch) => {
    dispatch({ type: SORT_NUMBERS_DESCENDING })
  }
}
