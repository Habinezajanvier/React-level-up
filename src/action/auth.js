export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setPassword = (password) => ({
  type: "SET_PASSWORD",
  payload: password,
});

export const userSignup = () => ({
  type: "USER_SIGN_UP",
});

export const userSignin = () => ({
  type: "USER_SIGN_IN",
});

export const updateLoginState = (state) => ({
  type: "UPDATE_LOGIN_STATE",
  payload: state,
});

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});
