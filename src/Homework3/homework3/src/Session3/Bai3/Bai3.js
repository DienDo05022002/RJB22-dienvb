import React, { Component } from 'react'
const img = [1,2,3,4];

export default class Bai3 extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            img:''
        }
    }  
    setImg = () => {
        this.setState({
            img:''
        })
    }
  render() {
    return (
      <div>Bai3
        <button onClick={()=>this.setState}> set</button>
        <div>{img[this.indexImage]}</div>
      </div>
    )
  }
}

