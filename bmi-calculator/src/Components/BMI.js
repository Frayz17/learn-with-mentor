import React, { Component } from 'react';
import CalcBMI from "./CalcBMI";

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 170,
      weight: 70
    }
  }

  handlerHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }

  handlerWeight = (event) => {
    this.setState({
      weight: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label htmlFor="height">height: </label>
          <span>120 </span>
          <input type="range" id="start" name="height" value={this.state.height} onChange={this.handlerHeight} min="120" max="230" />
          <span>230</span>
          <strong> {this.state.height} cm</strong>
        </div>

        <div>
          <label htmlFor="weight">weight: </label>
          <span>30 </span>
          <input type="range" id="start" name="weight" value={this.state.weight} onChange={this.handlerWeight} min="30" max="280" />
          <span>280</span>
          <strong> {this.state.weight} kg</strong>
        </div>

        <br/>

        <CalcBMI height={this.state.height} weight={this.state.weight} />
      </React.Fragment>
    );
  }
}

export default BMI;