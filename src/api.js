import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  signinSuccess
} from './actions';

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
          this.setHeaders(res.headers);
          dispatch(signupSuccess());
          dispatch(signinSuccess(currentUser));
        })
        .catch(err => {
          dispatch(signupFailure(err));
        });
    };
  }

  getUser(id) {
    console.log(`getting user: ${this.baseUrl}/users/${id}`);
    return `getting user: ${this.baseUrl}/users/${id}`;
  }

  setHeaders(headers) {
    console.log(headers);
  }
}

export default new Api();
