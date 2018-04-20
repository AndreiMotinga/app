import { combineReducers } from 'redux';
import {
  Auth,
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAILURE,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from './constants';

//TODO change auth reducer to root reducer
const initialAuthState = {
  activeDialog: null,
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

    /*
     * signup actions
     */
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

    /*
     * signin actions
     */
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

    /*
     * signout actions
     */
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

    /*
     * subscription actions
     */
    case SUBSCRIPTION_REQUEST:
      return { ...state, isLoading: true };

    case SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

    case SUBSCRIPTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    /*
     * dialog actions
     */

    case OPEN_DIALOG:
      return { ...state, activeDialog: action.dialog };

    case CLOSE_DIALOG:
      return { ...state, activeDialog: null };

    /*
     * return default
     */

    default:
      return state;
  }
}

const root = combineReducers({
  auth
});

export default root;
