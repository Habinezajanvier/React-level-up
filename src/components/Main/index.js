import React from "react";
import Form from "./Form";
import ImageGrid from "../ImageGrid";

export default () => {
  return (
    <div className="Main">
      <h2>Your Pictures</h2>
      <p>Here is the picture you have uploaded</p>
      <Form />
      <ImageGrid />
    </div>
  );
};
