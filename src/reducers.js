import { combineReducers } from 'redux';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actions';

const initialAuthState = {
  isLoading: false,
  errors: [],
  currentUser: {}
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false };

    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: state.errors.concat(action.error)
      };

    default:
      return state;
  }
}

const root = combineReducers({
  auth
});

export default root;
