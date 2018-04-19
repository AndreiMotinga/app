import axios from 'axios';
import {
  init,
  signupRequest,
  signupSuccess,
  signupFailure,
  signinRequest,
  signinSuccess,
  signinFailure,
  signoutRequest,
  signoutFailure,
  signoutSuccess,
  subscribeRequest,
  subscribeSuccess,
  subscribeFailure
} from './actions';
import history from 'config/history';

/**
 * Main object to handle api requests
 * contains useful methods to persist headers, interact with localStorage etc
 */
class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
    this.key = process.env.REACT_APP_LOCAL_STORAGE_KEY;
  }

  /**
   * read headers from local storage.
   * Useful when user stays signedin, but leaves page and then comes back.
   */
  headers() {
    const headers = localStorage.getItem(this.key);
    return JSON.parse(headers);
  }

  /**
   * server response with new token after each request.
   * call this with recevied headers to save uid, client and token.
   */
  cycleHeaders(headers) {
    // update headers on Api itslef
    this.headers = headers;

    // update headers in localStorage
    localStorage.setItem(this.key, JSON.stringify(headers));

    return;
  }

  /**
   * Checks if user already signed in upon visiting by
   * making GET to `/auth/validate_token`.
   * If current token on server and locally stored token are the same
   * sets currentUser in store
   */
  initUser() {
    const url = `${this.baseUrl}/auth/validate_token`;
    const headers = this.headers();

    return dispatch => {
      // don't validate if saved headers don't have uid in them,
      // a.k.a isn't signedin
      if (!headers.uid) {
        return dispatch(init({}));
      }

      return axios
        .get(url, { headers })
        .then(res => {
          this.cycleHeaders(res.headers);
          const currentUser = res.data.data;
          dispatch(init(currentUser));
        })
        .catch(err => {
          // user isn't saved locally.
          // we don't have init_request, init_succes and init_failure actions
          // dispatching init, but passing empty object to keep state in shape
          dispatch(init({}));
        });
    };
  }

  /**
   * Registers user.
   * makes POST request to `/auth`
   * dispatches SIGNUP_REQUEST => SIGNUP_SUCCESS || SIGNUP_FAILURE
   */
  signup(email, password) {
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
          this.cycleHeaders(res.headers);
          const currentUser = res.data.data;
          dispatch(signupSuccess()); // for completness sake
          dispatch(signinSuccess(currentUser));
          history.push('/');
        })
        .catch(err => {
          const errors = err.response.data.errors.full_messages;
          dispatch(signupFailure(errors));
        });
    };
  }

  /**
   * Sigin user.
   * makes POST request to `/auth/sign_in`
   * dispatches SIGNIN_REQUEST => SIGNIN_SUCCESS || SIGNIN_FAILURE
   */
  signin(email, password) {
    const url = `${this.baseUrl}/auth/sign_in`;
    return dispatch => {
      dispatch(signinRequest());
      return axios
        .post(url, {
          email,
          password
        })
        .then(res => {
          this.cycleHeaders(res.headers);
          const currentUser = res.data.data;
          dispatch(signinSuccess(currentUser));
          history.push('/');
        })
        .catch(err => {
          const errors = err.response.data.errors;
          dispatch(signinFailure(errors));
        });
    };
  }

  /**
   * Sigout user.
   * makes DELETE request to `/auth/sign_out`
   * dispatches SIGNOUT_REQUEST => SIGNOUT_SUCCESS || SIGNOUT_FAILURE
   */
  signout() {
    const url = `${this.baseUrl}/auth/sign_out`;
    return dispatch => {
      dispatch(signoutRequest());
      return axios
        .delete(url, { headers: this.headers })
        .then(res => {
          this.cycleHeaders(res.headers);
          dispatch(signoutSuccess());
        })
        .catch(err => {
          const errors = err.response.data.errors.full_messages;
          dispatch(signoutFailure(errors));
        });
    };
  }

  /**
   * Creates a user subscription
   * makes POST to `/subscriptions`, which returns current user on success.
   * dispatches SUBSCRIPTION.REQUEST
   *   => SUBSCRIPTION.SUCCESS || SUBSCRIPTION.ERROR
   */
  subscribe(token, planId, period) {
    const url = `${this.baseUrl}/subscriptions`;
    const headers = this.headers;
    return dispatch => {
      dispatch(subscribeRequest());
      return axios
        .post(
          url,
          {
            token,
            planId,
            period
          },
          {
            headers
          }
        )
        .then(res => {
          this.cycleHeaders(res.headers);
          // NOTE api response is slightly different format from init()
          const currentUser = res.data;
          dispatch(subscribeSuccess(currentUser));
          history.push('/');
        })
        .catch(err => {
          const errors = err.response.data.errors;
          dispatch(subscribeFailure(errors));
        });
    };
  }
}

export default new Api();
