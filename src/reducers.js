import { combineReducers } from 'redux';
import { Auth } from './constants';

const initialAuthState = {
  isLoading: true,
  errors: [],
  currentUser: {}
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case Auth.INIT:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

    case Auth.SIGNIN_REQUEST:
      return { ...state, isLoading: true };

    case Auth.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

    case Auth.SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    case Auth.SIGNOUT_REQUEST:
      return { ...state, isLoading: true };

    case Auth.SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: {}
      };

    case Auth.SIGNOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    case Auth.SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case Auth.SIGNUP_SUCCESS:
      return { ...state, isLoading: false };

    case Auth.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    case Auth.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

    default:
      return state;
  }
}

const root = combineReducers({
  auth
});

export default root;
