import React, { Component } from 'react';
import Counter from './Components/Counter';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Counter title='CounterA' total={10} min={0} max={50} />
        <Counter title='CounterB' total={0} min={0} max={70} />
      </React.Fragment>
    );
  }
}

export default App;
