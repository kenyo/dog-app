import React, { Component } from 'react';
import Header from './Header'
import Button from './Button'
import axios from 'axios'
const dogAPI = 'https://dog.ceo/api/breeds/list/all'

class App extends Component {
  getDogs = () => {
    axios.get(dogAPI)
      .then(({data}) => {
        const dogs = data.message

        this.setState({ dogs })
      })
  }

  setDogState = (dogs) => {
    // shorthand key-value
    this.setState({ dogs })
  }

  render() {
    return (
      <div className="App">
        <Header text={'This is the dog app'} />
        <Button text={'Get dogs'} onClick={this.getDogs}/>
      </div>
    );
  }
}

export default App;
