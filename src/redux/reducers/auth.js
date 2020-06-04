import {
  LOGOUT_AUTH,
  IS_AUTH_PENDING,
  IS_AUTH_RESOLVED,
  IS_AUTH_REJECTED,
  LOGOUT_AUTH_REJECTED,
} from '../../constants/actionConstants';

const initial_data = {
  isLoading: true,
  isAuth: false,
  email: '',
  password: '',
};

export const auth = (state = initial_data, action) => {
  switch (action.type) {
    case IS_AUTH_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    }
    case IS_AUTH_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };
    }
    case IS_AUTH_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errorMsg: action.payLoad,
      };
    }
    case LOGOUT_AUTH: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case LOGOUT_AUTH_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errorMsg: action.payLoad,
      };
    }
    default: {
      return state;
    }
  }
};
