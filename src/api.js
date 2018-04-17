import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  signinSuccess,
  init
} from './actions';
import history from './history';

class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  registerUser(email, password, password_confirmation) {
    const url = `${this.baseUrl}/auth`;
    return dispatch => {
      dispatch(signupRequest());
      return axios
        .post(url, {
          email,
          password,
          password_confirmation
        })
        .then(res => {
          const currentUser = res.data.data;
          this.cycleHeaders(res.headers);
          dispatch(signupSuccess());
          dispatch(signinSuccess(currentUser));
          history.push('/');
        })
        .catch(err => {
          dispatch(signupFailure(err));
        });
    };
  }

  fetchCurrentUser() {
    const url = `${this.baseUrl}/auth/validate_token`;
    const headers = this.headers();
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

  logout() {
    this.cycleHeaders({});
  }
}

const api = new Api();

export default api;
