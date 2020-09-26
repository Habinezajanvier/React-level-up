import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import { useDispatch, useSelector } from "react-redux";
import Authentication from "../Authenticate";
import {
  setToken,
  updateLoginState,
  setEmail,
  setPassword,
} from "../../action/auth";

dotenv.config();

export default ({ history }) => {
  const dispatch = useDispatch();
  const [authState, setAuthSate] = useState("Login");

  const changeAuthState = (e) => {
    e.target.parentNode.childNodes.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    e.target.innerText === "Login"
      ? setAuthSate("Login")
      : setAuthSate("Signup");
  };
  const email = useSelector((state) => state.loginState.email);
  const password = useSelector((state) => state.loginState.password);
  const updateAuthState = (data) => {
    console.log(data.idToken);
    dispatch(setToken(`${data.idToken}`));
    dispatch(setEmail(""));
    dispatch(setPassword(""));
    dispatch(updateLoginState(true));
  };
  const sendCredentials = (e) => {
    e.preventDefault();
    e.target.reset();
    setAuthSate("Lauding ...");
    if (authState === "Signup") {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          updateAuthState(data);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          updateAuthState(data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="backdrop auth">
      <div className="upperCheckout">
        <div>
          <button className="active" onClick={changeAuthState}>
            Login
          </button>
          <button onClick={changeAuthState}>Sign up</button>
        </div>
        <Authentication login={sendCredentials} authState={authState} />
      </div>
    </div>
  );
};
