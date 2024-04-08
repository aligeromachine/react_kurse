import React from "react";
import St from "./Loader.module.css";

const Loader = function(props) {
  return (
    <div className={St.downloader}>
      <div className={St.loader} {...props} />
    </div>
  );
}

export default Loader;