import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ColumnBar from "./components/ColumnBar";

const MIN = 0;
const MAX = 100;

function Block4({
  text = "VISSITORS",
  total = 0,
  percentageItems = [40, 30, 60, 70, 55],
  unit = "",
}) {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  const color = ["red", "green", "yellow", "blue", "orange"];
  return (
    // <div>
      <div className="div__bar4">
       <div>
        <div className="text__visitiors">{unit} {text}</div>
        <div className="text__total">{total}</div>
       </div>
      <div style={{display:'flex',justifyContent:"center"}}>
      <ColumnBar
        text="MON"
        percentage={percentageItems[0]}
        color={color[0]}
      />
      <ColumnBar
        text="TUE"
        percentage={percentageItems[1]}
        color={color[1]}
      />
      <ColumnBar
        text="WED"
        percentage={percentageItems[2]}
        color={color[2]}
      />
      <ColumnBar
        text="THU"
        percentage={percentageItems[3]}
        color={color[3]}
      />
      <ColumnBar text="FRI" percentage={percentageItems[4]} color={color[4]} />
      {/* </div> */}
    </div>
  </div>
  );
}

Block4.propTypes = {
  percentage: PropTypes.number,
};

Block4.defaultProps = {
  percentage: 50,
};

export default Block4;
