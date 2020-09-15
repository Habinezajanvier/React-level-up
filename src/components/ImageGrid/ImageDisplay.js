import React from "react";
import { motion } from "framer-motion";

export default ({ imageUrl, setImageUrl }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setImageUrl(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={imageUrl}
        alt="Image_avatar"
      />
    </motion.div>
  );
};
