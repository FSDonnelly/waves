import { LOGIN_USER, LOGIN_ERROR } from '../actions/types';

const initialState = {};

export default function(state = initialState, { payload, type }) {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: payload
      };
    // case LOGIN_ERROR:
    //   return {
    //     ...state,
    //     loginSuccess: false
    //   };
    default:
      return state;
  }
}
