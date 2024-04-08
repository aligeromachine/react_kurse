import React from "react";

const MySel = function(props){
  
  return (
    <select value={props.value} onChange={e => props.onChange(e.target.value)} >
      <option disabled={true} value={props.default} key={"none"}>{props.default}</option>
      {props.opt.map(
        o => <option value={o.value} key={o.value}>{o.name}</option>
      )}
    </select>
  );
}

export default MySel;