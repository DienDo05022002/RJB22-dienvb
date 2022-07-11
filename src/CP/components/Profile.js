import React from 'react'
import * as Icons from "react-icons/ai";
import './Profile.css'

const CustomFaIcon = ({ name }) => {
  const FaIcon = Icons[name];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon />;
};

export default function SocialBlock({
  text = "TEXT",
  color = "pink",
  iconName = "fa-solid fa-house",
  percentage = 50,
}) {
  return (
    <div className="div__bar">
      <div className="div__bar-text">
        <CustomFaIcon name="AiFillStar" />
        <i className={iconName}></i>
        <span className="span-name">{text}</span>
      </div>
      <div className="process__bar">
        <div className="success" style={{ backgroundColor: color, width: (`${percentage}%`) }}>
          <p className="percentage-none">{percentage}%</p>
        </div>
      </div>
    </div>
  );
}