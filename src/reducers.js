import { combineReducers } from 'redux';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actions';

const initialAuthState = {
  isLoading: false,
  errors: [],
  currentUser: {
    email: 'andrew.motinga@gmail.com'
  },
  isLoggedIn: true,
  headers: {
    uid: '',
    client: '',
    token: ''
  }
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
        headers: action.headers
      };
    case SIGNUP_FAILURE:
    // return { ...state,
    //   isLoading: false,
    //   errors: state.errors.concat(action.payload.errors)
    // }
    default:
      return state;
  }
}

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ];
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           });
//         }
//         return todo;
//       });
//     default:
//       return state;
//   }
// }
//
// function currentUser(state = [], action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

const root = combineReducers({
  auth
});

export default root;
