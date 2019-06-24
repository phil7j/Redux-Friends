import {
  FETCHING,
  SUCCESS,
  FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS
} from '../actions';

const initialState = {
    error: '',
    isFetching: false,
    friends: [],
    isLoggingIn: false
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
        };
        case LOGIN_START:
          return {
            ...state,
            isLoggingIn: true
          };
        case LOGIN_SUCCESS:
          return {
            ...state,
            isLoggingIn: false
          }
      default:
        return state;
    }
  }





export default reducer;