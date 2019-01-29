export const defaultState = {
  data: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_NUMBERS':
    console.log('the state', action)
      return {
        ...state,
        data: [...action.phoneNumber]
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
