import axios from 'axios';
import Api from './api';

/*
 * action creators
 */
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export function requestSignup() {
  return {
    type: SIGNUP_REQUEST
  };
}

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS
  };
}

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
function signupFailure(err) {
  return {
    type: SIGNUP_FAILURE,
    error: err
  };
}

export function signupUser(email, password, password_confirmation) {
  const url = `${process.env.REACT_APP_API_URL}/auth`;
  return function(dispatch) {
    dispatch(requestSignup());
    Api.createUser(email, password, password_confirmation)
      .then(res => {
        const currentUser = res.data.data;
        dispatch(signupSuccess);
      })
      .catch(err => {
        dispatch(signupFailure(err));
      });
  };
}

// axios.get(url)
//   .then((response) => dispatch(
//     type: types.FETCH_WEATHER_SUCCESS,
//     data: response.data
//   })).error((response) => dispatch({
//     type: types.FETCH_WEATHER_FAILURE,
//     error: response.error
//   })
