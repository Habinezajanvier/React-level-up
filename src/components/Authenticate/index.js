import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../action/auth";

export default ({ authState, login }) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.loginState.email);
  const password = useSelector((state) => state.loginState.password);

  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const passwordHandler = (e) => {
    dispatch(setPassword(e.target.value));
  };
  return (
    <div className="auth">
      <form onSubmit={login}>
        <label>
          <input onChange={emailHandler} value={email} placeholder="Email" />
        </label>
        <label>
          <input
            onChange={passwordHandler}
            type="password"
            value={password}
            placeholder="Password"
          />
        </label>
        <button>{authState}</button>
      </form>
    </div>
  );
};
