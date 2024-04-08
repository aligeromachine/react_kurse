import React from "react";
import St from "./MyBtn.module.css";


const MyBtn = function({children, ...props}) {

  return (
    <button {...props} className={St.myBtn}>
      {children}
    </button>
  );
}

export default MyBtn;