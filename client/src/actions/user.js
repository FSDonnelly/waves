import axios from 'axios';

import { LOGIN_USER } from './types';

export const loginUser = dataToSubmit => async dispatch => {
  const res = await axios
    .post('api/users/login', dataToSubmit)
    .then(res => res.data);

  dispatch({ type: LOGIN_USER, payload: res });
};
