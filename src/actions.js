/*
 * action types
 */
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

/*
 * action creators
 */
export function requestSignup(email, password, password_confirmation) {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      email,
      password,
      password_confirmation
    }
  };
}

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index };
// }
// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }
