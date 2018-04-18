import Api from './api';

/*
 * action creators
 */
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS
  };
}

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export function signupFailure(errors) {
  return {
    type: SIGNUP_FAILURE,
    errors
  };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

export const LOGOUT_FAILURE = 'LOGIN_FAILURE';
export function logoutFailure(errors) {
  return {
    type: LOGOUT_FAILURE,
    errors
  };
}

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export function signinSuccess(currentUser) {
  return {
    type: SIGNIN_SUCCESS,
    currentUser
  };
}

// todo can you get rid of it?
export function createUser(email, password) {
  return Api.registerUser(email, password);
}

// todo can you get rid of it?
export function logoutUser() {
  return Api.logoutUser();
}

export function fetchCurrentUser() {
  return Api.fetchCurrentUser();
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password
  };
}

export function fetchLogin(email, password) {
  return Api.login(email, password);
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(currentUser) {
  return {
    type: LOGIN_SUCCESS,
    currentUser
  };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginFailure(errors) {
  return {
    type: LOGIN_FAILURE,
    errors
  };
}

export const INIT = 'INIT';
export function init(currentUser) {
  return {
    type: INIT,
    currentUser
  };
}
