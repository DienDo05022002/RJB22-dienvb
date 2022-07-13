
import pic from './imgBai6/R.jpg'
import pic1 from './imgBai6/R1.jpg'
import pic2 from './imgBai6/R2.jpg'
import pic3 from './imgBai6/R3.jpg'
import pic4 from './imgBai6/main-image.jpg'
import './Bai6.css'

import React, { Component } from 'react'

export default class Bai6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: 0,
    };
  }
  render() {
      const image = [pic,pic1,pic2,pic3,pic4];
    return (
      <div className="main-contaner">
        {/* <img src = {image[this.state.i]}></img> */}
        <img className="img__container" src={image[this.state.i]} alt="a"></img>
        <button className="buttom-bai6"
        onClick={() => {
          if(this.state.i === image.length-1 ) {
            this.setState({ i: 0 })
          } else {
            this.setState({ i: this.state.i + 1 });
          }
        }
      }
        >+</button>
        <button className="buttom-bai6" 
        onClick={() => {
          if(this.state.i !==  image.length-1 ) {
            this.setState({ i: image.length - 1 })
          } else {
            this.setState({ i: this.state.i - 1 });
          }
        }}>-</button>
      </div>
    )
  }
}

