import Api from './api';
// TODO fix casing
import {
  Auth,
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAILURE,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from './constants';

/**
 * Initial setup
 */

export function initUser() {
  return Api.initUser();
}

export function init(currentUser) {
  return {
    type: Auth.INIT,
    currentUser
  };
}

/**
 * singup flow
 */
export function signup(email, password) {
  return Api.signup(email, password);
}

export function signupRequest() {
  return {
    type: Auth.SIGNUP_REQUEST
  };
}

export function signupSuccess() {
  return {
    type: Auth.SIGNUP_SUCCESS
  };
}

export function signupFailure(errors) {
  return {
    type: Auth.SIGNUP_FAILURE,
    errors
  };
}

/**
 * singin flow
 */

export function signin(email, password) {
  return Api.signin(email, password);
}

export function signinRequest(email, password) {
  return {
    type: Auth.SIGNIN_REQUEST,
    email,
    password
  };
}

export function signinSuccess(currentUser) {
  return {
    type: Auth.SIGNIN_SUCCESS,
    currentUser
  };
}

export function signinFailure(errors) {
  return {
    type: Auth.SIGNIN_FAILURE,
    errors
  };
}

/**
 * singout flow
 */
export function signout() {
  return Api.signout();
}

export function signoutRequest() {
  return {
    type: Auth.SIGNOUT_REQUEST
  };
}

export function signoutSuccess() {
  return {
    type: Auth.SIGNOUT_SUCCESS
  };
}

export function signoutFailure(errors) {
  return {
    type: Auth.SIGNOUT_FAILURE,
    errors
  };
}

/**
 * subscriptions flow
 */

export function subscribe(token) {
  return Api.subscribe(token);
}

export function subscribeRequest() {
  return {
    type: SUBSCRIPTION_REQUEST
  };
}

export function subscribeSuccess(currentUser) {
  return {
    type: SUBSCRIPTION_SUCCESS,
    currentUser
  };
}

export function subscribeFailure(errors) {
  return {
    type: SUBSCRIPTION_FAILURE,
    errors
  };
}

/**
 * dialogs flow
 */

export function openDialog(dialog) {
  return {
    type: OPEN_DIALOG,
    dialog
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  };
}
