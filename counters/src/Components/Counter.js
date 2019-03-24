import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.total
    }
  }


  _setState(objOrFn) {
    return new Promise(resolve => {
      super.setState(objOrFn, resolve)
    })
  }

  _increment = async () => {
    if (this.state.total < this.props.max + 1) {
      await this._setState({total: this.state.total + 1})
      console.log('first call ', this.state) // +1
      await this._setState({total: this.state.total + 1})
      console.log('second call ', this.state) // +1
    }
  }

  _decrement = async () => {
    if (this.state.total > this.props.min + 1) {
      await this._setState({total: this.state.total - 1})
      console.log('first call ', this.state) // -1
      await this._setState({total: this.state.total - 1})
      console.log('second call ', this.state) // -1
    }
  }

  reset = () => {
    this.setState(() => ({
      total: this.props.total
    }))
  }

  render() {
    return (
      <div>
        {this.props.title} {this.state.total} {" "}
        <button id="btn-minus" onClick={this._decrement}>-1</button> {" "}
        <button id="btn-plus" onClick={this._increment}>+1</button> {" "}
        <button id="btn-reset" onClick={this.reset}>Reset</button> {" "}
      </div>
    );
  }
}

export default Counter;
