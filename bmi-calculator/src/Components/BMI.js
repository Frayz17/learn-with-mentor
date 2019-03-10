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

  render() {
    return (
      <React.Fragment>
        <h2>hello</h2>
        <CalcBMI height={this.state.height} weight={this.state.weight} />
      </React.Fragment>
    );
  }
}

export default BMI;