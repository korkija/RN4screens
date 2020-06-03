import axios from 'axios';

import {AUTH_LOGIN_URL} from '../../constants/configApp';
import {
  IS_AUTH_PENDING,
  IS_AUTH_RESOLVED,
  IS_AUTH_REJECTED,
} from '../../constants/actionConstants';

const isAuthPending = () => ({
  type: IS_AUTH_PENDING,
});

const isAuthResolved = () => ({
  type: IS_AUTH_RESOLVED,
});

const isAuthRejected = () => ({
  type: IS_AUTH_REJECTED,
  payLoad: 'Something wrong!',
});

export const tryAuth = ({email, password}) => dispatch => {
  dispatch(isAuthPending());
  axios
    .post(AUTH_LOGIN_URL, {email: email, password: password})
    .then(({data}) => {
      // console.log('data.result');
      // console.log(data);
      dispatch(isAuthResolved());
    })
    .catch(error => {
      console.log(error);
      dispatch(isAuthRejected());
    });
};
