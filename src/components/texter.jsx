import { useState } from "react";
import React from "react";

const Texter = function() {
  const [values, setValues] = useState("TEXT IN VALUES");
  const handleChange = (event) => {
    setValues(event.target.value);
  };
  return (
    <div>
      <h1>{values}</h1>
      <input 
      type="text" 
      value={values}
      onChange={handleChange}
      />
    </div>
  )
}

export default Texter;