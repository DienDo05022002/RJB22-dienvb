import React from 'react'
import './ChartBar1.css'

export default function ChartBar1(props) {
    const {text} = props
    const {color1} = props
    const {colors} = props
    const {percentage} = props
  return (
    <div className="main-chartBar">
        <div className="chartBar1" style={{backgroundColor: color1, color: "white", width: 200}}>{text}</div>
        <div style={{width: 500}}>
           <div className="chartBar1-left" style={{width: percentage,backgroundColor: colors, color: "while", height: 40}}>{percentage}</div>
        </div>
    </div>
  )
}
