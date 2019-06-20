import {
  FETCHING,
  SUCCESS,
  FAILURE
} from '../actions';

const initialState = {
    error: '',
    isFetching: false,
    friends: []
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case FAILURE:
        return {
          ...state,
          isFetching: false,
          error: 'Uh oh... something happened 😵!'
        };
      case FETCHING:
        return {
          ...state,
          isFetching: true
        };
      case SUCCESS:
        return {
          ...state,
          isFetching: false,
          friends: action.payload
        }
      default:
        return state;
    }
  }





export default reducer;