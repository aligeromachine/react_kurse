import React from "react";
import St from "../styles/App.module.css"

const Error = () => {
  return(
    <div className={St.root} >
      <h1 style={{color: "red"}}>
        PAGE NOT FOUND
      </h1>
    </div>
  );
}

export default Error;