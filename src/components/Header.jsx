import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {foo: 'foo'}
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <p>{this.state.foo}</p>
      </div>
    )
  }
}
