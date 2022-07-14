import React from 'react'
import {useState} from 'react'
import pic from './img666/R-main.jpg'
import p1 from './img666/R1.jpg'
import p2 from './img666/R2.jpg'
import p3 from './img666/R5.jpg'
import p4 from './img666/R4.jpg'
import './B6.css'

const pics = [pic,p1,p2,p3,p4]

export default function Bai6() {
    const [image, setImage] = useState(0)
  return (
    <div>Bai6
        <div>
            <img className="img__container" src={pics[image]} alt="a"></img>
            <div className="click__btn">
                <button className="click__btn" 
                onClick={() => {
                    // setImage(image+1)
                    if(pics.length < 6) {setImage(image+1)} else {setImage(image[0])}
                }}>+</button>

                {/* <button  className="click__btn"
                onClick={() => {
                    if(setImage(image) !== pics.length)
                    {setImage(image-1)}
                }}>-</button> */}
            </div>
        </div>
        <div>
            <img className="img__container" src={pics[image]} alt="a"></img>
            <div style={{position:"absolute", marginLeft: 500, marginBottom: 50}}>
            {pics.map((data, index) => {
            return (
                <button className="btn__thumb"
                 key={index} onClick={() =>setImage(index)}></button>
                )
            })}
            </div>
        </div>
    </div>
  )
}
