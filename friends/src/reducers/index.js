import {
  FETCH_FRIEND_START,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_ERROR
} from '../actions';

const initialState = {
    error: null,
    isFetching: false,
    friends: []
  };

  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {

      case FETCH_FRIEND_ERROR:
        return {
          ...state,
          isLoading: false,
          error: 'Uh oh... something happened 😵!'
        };
      default:
        return state;
    }
  }





export default reducer;