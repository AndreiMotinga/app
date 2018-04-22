import { combineReducers } from 'redux';
import {
  AUTH,
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAILURE,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from './constants';

//TODO change auth reducer to root reducer
const initialAuthState = {
  activeDialog: null,
  isLoading: false,
  errors: [],
  currentUser: {}
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case AUTH.INIT:
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser
      };

    /*
     * signup actions
     */
    case AUTH.SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case AUTH.SIGNUP_SUCCESS:
      return {
        ...state,
        activeDialog: null,
        isLoading: false
      };

    case AUTH.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    /*
     * signin actions
     */
    case AUTH.SIGNIN_REQUEST:
      return { ...state, isLoading: true };

    case AUTH.SIGNIN_SUCCESS:
      return {
        ...state,
        activeDialog: null,
        isLoading: false,
        currentUser: action.currentUser
      };

    case AUTH.SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors
      };

    /*
     * signout actions
     */
    case AUTH.SIGNOUT_REQUEST:
      return { ...state, isLoading: true };

    case AUTH.SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: {}
      };

    case AUTH.SIGNOUT_FAILURE:
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
