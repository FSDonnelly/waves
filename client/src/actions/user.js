import axios from 'axios';

import { LOGIN_USER, LOGIN_ERROR } from './types';

export const loginUser = dataToSubmit => async dispatch => {
  try {
    const res = await axios
      .post('api/users/login', dataToSubmit)
      .then(res => res.data);
    console.log(res);
    dispatch({ type: LOGIN_USER, payload: res });
  } catch (err) {
    //   dispatch({
    //     type: PROFILE_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status }
    //   });
  }
  //   const request = axios
  //     .post('api/users/login', dataToSubmit)
  //     .then(res => res.data);

  //   return { type: LOGIN_USER, payload: request };
};
