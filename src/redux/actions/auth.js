import axios from 'axios';

import {AUTH_LOGIN_URL, AUTH_LOGOUT_URL} from '../../constants/configApp';
import {
  LOGOUT_AUTH,
  IS_AUTH_PENDING,
  IS_AUTH_RESOLVED,
  IS_AUTH_REJECTED,
  LOGOUT_AUTH_REJECTED,
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

const logoutActionRejected = () => ({
  type: LOGOUT_AUTH_REJECTED,
  payLoad: 'Something wrong!',
});

const logoutAction = () => ({
  type: LOGOUT_AUTH,
});

export const tryAuth = ({email, password}) => dispatch => {
  dispatch(isAuthPending());
  console.log('email ', email);
  axios
    .post(AUTH_LOGIN_URL, {email: email, password: password})
    .then(() => {
      dispatch(isAuthResolved());
    })
    .catch(error => {
      console.log(error);
      dispatch(isAuthRejected());
    });
};

export const logout = () => dispatch => {
  axios
    .post(AUTH_LOGOUT_URL)
    .then(() => {
      dispatch(logoutAction());
    })
    .catch(error => {
      console.log(error);
      dispatch(logoutActionRejected());
    });
};
