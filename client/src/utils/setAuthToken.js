import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x_auth'] = token;
  } else {
    delete axios.defaults.headers.common['x_auth'];
  }
};
export default setAuthToken;
