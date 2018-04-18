import { combineReducers } from 'redux';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  INIT
} from './actions';

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

    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    case LOGOUT_REQUEST:
      return { ...state, isLoading: true };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: {}
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false };

    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
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
