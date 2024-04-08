import React from "react";
import St from "./MyInp.module.css"

const MyInp = function(props) {

  return (
    <input {...props} className={St.myInp} />
  );
}

export default MyInp;