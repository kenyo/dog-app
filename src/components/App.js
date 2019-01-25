import React, { Component } from 'react';
import Header from './Header'
import Button from './Button'

class App extends Component {

  setDogState = (dogs) => {
    // shorthand key-value
    this.setState({ dogs })
  }

  render() {
    return (
      <div className="App">
        <Header text={'This is the dog app'} />
        <Button text={'Get dogs'} setDogState={this.setDogState} />
      </div>
    );
  }
}

export default App;
