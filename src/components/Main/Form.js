import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload, uploadError } from "../../action";
import { motion } from "framer-motion";

const Progress = () => {
  const progress = useSelector((state) => state.fileState.progress);
  return progress !== 0 ? (
    <div className="progress_bar">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
      ></motion.div>
    </div>
  ) : null;
};

export default () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.fileState.error);
  const changeHandler = (e) => {
    const selected = e.target.files[0];
    const accepted = ["image/png", "image/jpeg"];

    if (selected && accepted.includes(selected.type)) {
      dispatch(fileUpload(e.target.files[0]));
      dispatch(uploadError(""));
    } else {
      const errorMsg = "Please choose the accepted file Type";
      dispatch(uploadError(errorMsg));
      dispatch(fileUpload(null));
    }
  };
  return (
    <form className="addingForm">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      {error && <div className="error">{error}</div>}
      <Progress />
    </form>
  );
};
