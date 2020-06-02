import {LOGIN_AUTH, LOGOUT_AUTH} from '../../constants/actionConstants';

const initial_data = {
  isAuth: false,
  email: '',
  password: '',
};

export const auth = (state = initial_data, action) => {
  switch (action.type) {
    case LOGIN_AUTH: {
      return {
        ...state,
        isAuth: true,
        email: action.payLoad.email,
        password: action.payLoad.password,
      };
    }
    case LOGOUT_AUTH: {
      return {
        ...state,
        isAuth: false,
        photosList: action.payLoad,
      };
    }

    default: {
      return state;
    }
  }
};
