import React from "react";
import { useDispatch } from "react-redux";
import { updateLoginState, setToken } from "../../action/auth";

export default () => {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(updateLoginState(false));
  };
  return (
    <header>
      <h3>Firegram</h3>
      <ul>
        <li>Home</li>
        <li>Messages</li>
        <li onClick={logoutHandle}>Logout</li>
      </ul>
    </header>
  );
};
