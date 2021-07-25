import react, { useState } from "react";

const BoxDisplay = (props) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>

      {props.array.map((item, index) => (
        <div
          style={{ backgroundColor: item, width: "100px", height: "100px" }}
          key={index}
        ></div>
      ))}
    </div>
  );
};
export default BoxDisplay;