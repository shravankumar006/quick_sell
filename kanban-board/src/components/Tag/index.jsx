import React from "react";

// css
import "./Tag.css";

//icons
import { FaCircle } from "react-icons/fa";

const Tag = ({ text }) => {
  return (
    <div className="Tag" style={ {border: ""} }>
      
      <FaCircle style={{ color: "#aaa", fontSize: "smaller" }} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;