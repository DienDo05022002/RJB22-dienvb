
import React, { Component } from 'react';
import {AiFillStar} from 'react-icons/ai';
// import PropTypes from 'prop-types';
const MAX_STAR=5

class Bai2 extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      star: 0
    };
  }
    setStar = (value) => {
      this.setState({
        star:value
      });
    };

    renderStar = (star) => {
      let result = [];

      for (let i=0;i<star;i++) {
        result.push(<span onClick={this.setStar.bind(this, i+1)}>
          <AiFillStar style={{color :"yellow"}}></AiFillStar>
        </span>)
      }
      for (let i=star;i<MAX_STAR;i++) {
        result.push(<span onClick={this.setStar.bind(this, i+1)}>
          <AiFillStar></AiFillStar></span>)
      }
      return result
      
    }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent:"center"}}>
        <div>
          {/* <p>{this.state.star}</p> */}
          <p>{this.renderStar(this.state.star)}</p>
          <button onClick={this.setStar.bind(this, 4)}>Rate Me</button>
        </div>
      </div>
    );
  }
}

Bai2.propTypes = {

};

export default Bai2;
