import * as data from '../data.json';

export const defaultState = {
  data: data.data.phoneNumbers
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_NUMBERS':
      return {
        ...state,
        data: [...state.data, {id: state.data.length, userPhoneNumber: action.phoneNumber}]
      }
    case 'SORT_NUMBERS_ASCENDING':
      return {
        ...state,
        data: [...state.data.sort((a, b) => {
          return a.userPhoneNumber - b.userPhoneNumber;
        })]
      }
    case 'SORT_NUMBERS_DESCENDING':
      return {
        ...state,
        data: [...state.data.sort((a, b) => {
          return b.userPhoneNumber - a.userPhoneNumber;
        })]
      }
    default:
      return state;
  }
}
