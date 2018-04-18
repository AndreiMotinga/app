import Api from './api';
import { Auth } from './constants';

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
