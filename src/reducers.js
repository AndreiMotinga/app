import { combineReducers } from 'redux';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  INIT
} from './actions';
import Api from './api';

const initialAuthState = {
  isLoading: true,
  errors: [],
  currentUser: {}
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

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

    case SIGNIN_SUCCESS:
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
