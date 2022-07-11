import React from "react";
import * as Icons from "react-icons/fa";
import './socia.css'

function SocialBlock({
  text = "Facebook",
  color = "blue",
  total = 0,
  iconName = "FaFacebookF",
  unit = "",
}) {
  const IconComponent = Icons[iconName];
  return (
    <div className="main-socia" style={{backgroundColor:color}}>
      <div style={{color: "white"}}>
        {!IconComponent ? <Icons.FaBeer /> :  <IconComponent className="icon-name"/> }
      </div>
      <div className="main-socia-buttom">
        <div className="main-socia-text">{text}</div>
        <div className="main-socia-unit">
          {total} {unit}
        </div>
      </div>
    </div>
  );
}

export default SocialBlock;