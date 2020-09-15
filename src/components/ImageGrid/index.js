import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { setDocs } from "../../action";
import ImageDisplay from "./ImageDisplay";
import { motion } from "framer-motion";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firestore
      .collection("images")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setDocs(document));
      });
  }, ["images"]);
  const images = useSelector((state) => state.fileState.docs);
  const [imageUrl, setImageUrl] = useState(false);
  return (
    <React.Fragment>
      <div className="image_grid">
        {images &&
          images.map((image) => (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setImageUrl(image.url)}
              className="image_wrap"
              key={image.id}
            >
              <motion.img
                src={image.url}
                alt="image_avatar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
      {imageUrl ? (
        <ImageDisplay setImageUrl={setImageUrl} imageUrl={imageUrl} />
      ) : null}
    </React.Fragment>
  );
};
