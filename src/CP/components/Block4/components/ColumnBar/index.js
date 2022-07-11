import React from "react";

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ColumnBar({ text = "MON", percentage = 50,total = 0, color = 'red' }) {
  return (
    <div style={{ margin: 12 }}>
      <div
        style={{
          border: "0.4px solid #ccc",
          height: 100,
          position: "relative",
          width: 20,
          margin: 'auto'
        }}
      >
        <div
          className="column"
          style={{
            backgroundColor: color,
            position: "absolute",
            bottom: 0,
            height: percentage,
            width: "100%",
          }}
        ></div>
      </div>

      <span className="text-__span">{text}</span>
      <br></br>
      <span>{numberWithCommas(total)}</span>
    </div>
  );
}

export default ColumnBar;
