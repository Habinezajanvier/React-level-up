import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import ImageGrid from "../ImageGrid";
import Auth from "./Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => (
  <div className="Main">
    <h2>Your Pictures</h2>
    <p>Here is the picture you have uploaded</p>
    <Form />
    <ImageGrid />
  </div>
);

export default () => {
  const loged = useSelector((state) => state.loginState.logedIn);
  return (
    <Router>
      {loged ? (
        <Route path="/" component={Main} />
      ) : (
        <Route path="/" component={Auth} />
      )}
    </Router>
  );
};
