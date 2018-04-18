import Api from './api';
import { Auth } from './constants';

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

export function signinSuccess(currentUser) {
  return {
    type: Auth.SIGNIN_SUCCESS,
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

export function loginRequest(email, password) {
  return {
    type: Auth.LOGIN_REQUEST,
    email,
    password
  };
}

export function fetchLogin(email, password) {
  return Api.login(email, password);
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

export function init(currentUser) {
  return {
    type: Auth.INIT,
    currentUser
  };
}
