import axios from 'axios';

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
function signupSuccess(currentUser, headers) {
  return {
    type: SIGNUP_SUCCESS,
    currentUser
  };
}

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function signupUser(email, password, password_confirmation) {
  const url = `${process.env.REACT_APP_API_URL}/auth`;
  return function(dispatch) {
    dispatch(requestSignup());
    axios
      .post(url, {
        email,
        password,
        password_confirmation
      })
      .then(function(response) {
        const currentUser = response.data.data;
        dispatch(signupSuccess(currentUser));
      })
      .catch(function(error) {
        console.error(error);
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
