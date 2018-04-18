import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  signinSuccess,
  loginFailure,
  logoutSuccess,
  init
} from './actions';
import history from './history';

class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  registerUser(email, password) {
    const url = `${this.baseUrl}/auth`;
    return dispatch => {
      dispatch(signupRequest());
      return axios
        .post(url, {
          email,
          password,
          password_confirmation: password
        })
        .then(res => {
          const currentUser = res.data.data;
          this.cycleHeaders(res.headers);
          dispatch(signupSuccess());
          dispatch(signinSuccess(currentUser));
          history.push('/');
        })
        .catch(err => {
          const errors = err.response.data.errors.full_messages;
          dispatch(signupFailure(errors));
        });
    };
  }

  fetchCurrentUser() {
    const headers = this.headers();
    const url = `${this.baseUrl}/auth/validate_token`;
    return dispatch => {
      return axios
        .get(url, {
          headers: headers
        })
        .then(res => {
          const currentUser = res.data.data;
          this.cycleHeaders(res.headers);
          dispatch(init(currentUser));
        })
        .catch(err => {
          dispatch(init({}));
        });
    };
  }

  cycleHeaders(headers) {
    this.headers = headers;
    localStorage.setItem('cryptometrics-headers', JSON.stringify(headers));
    return;
  }

  headers() {
    const headers = localStorage.getItem('cryptometrics-headers');
    return JSON.parse(headers);
  }

  login(email, password) {
    const url = `${this.baseUrl}/auth/sign_in`;
    return dispatch => {
      return axios
        .post(url, {
          email,
          password
        })
        .then(res => {
          const currentUser = res.data.data;
          this.cycleHeaders(res.headers);
          // TODO rename to login
          dispatch(signinSuccess(currentUser));
          history.push('/');
        })
        .catch(err => {
          const errors = err.response.data.errors;
          dispatch(loginFailure(errors));
        });
    };
  }

  logoutUser() {
    const url = `${this.baseUrl}/auth/sign_out`;
    return dispatch => {
      return axios
        .delete(url, {
          headers: this.headers
        })
        .then(res => {
          this.cycleHeaders(res.headers);
          // TODO rename to login
          dispatch(signinSuccess({}));
        })
        .catch(err => {
          const errors = err.response.data.errors.full_messages;
          dispatch(loginFailure(errors));
        });
    };
  }
}

const api = new Api();

export default api;
