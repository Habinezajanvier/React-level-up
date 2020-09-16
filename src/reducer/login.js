const initialState = {
  logedIn: false,
  token: null,
  user: null,
  email: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "UPDATE_LOGIN_STATE":
      return {
        ...state,
        logedIn: action.payload,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      break;
  }
  return state;
};
