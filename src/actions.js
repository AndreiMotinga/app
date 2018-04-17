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
export function signupFailure(err) {
  return {
    type: SIGNUP_FAILURE,
    error: err
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
export function createUser(email, password, password_confirmation) {
  return Api.registerUser(email, password, password_confirmation);
}

export function fetchCurrentUser() {
  return Api.fetchCurrentUser();
}

export const INIT = 'INIT';
export function init(currentUser) {
  return {
    type: INIT,
    currentUser
  };
}
