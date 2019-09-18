import { LOGIN_USER } from '../actions/types';

const initialState = {};

export default function(state = initialState, { payload, type }) {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: payload
      };

    default:
      return state;
  }
}
