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

export function loginRequest(email, password) {
  return {
    type: Auth.LOGIN_REQUEST,
    email,
    password
  };
}

export function loginSuccess(currentUser) {
  return {
    type: Auth.LOGIN_SUCCESS,
    currentUser
  };
}

export function loginFailure(errors) {
  return {
    type: Auth.LOGIN_FAILURE,
    errors
  };
}

export function signinSuccess(currentUser) {
  return {
    type: Auth.SIGNIN_SUCCESS,
    currentUser
  };
}

/**
 * singout flow
 */
export function logoutUser() {
  return Api.logoutUser();
}

export function logoutRequest() {
  return {
    type: Auth.LOGOUT_REQUEST
  };
}

export function logoutSuccess() {
  return {
    type: Auth.LOGOUT_SUCCESS
  };
}

export function logoutFailure(errors) {
  return {
    type: Auth.LOGOUT_FAILURE,
    errors
  };
}
