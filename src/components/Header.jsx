import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 'foo',
      text: this.props.text.slice(0, 10),
    }
  }

  render() {
    const { foo, text } = this.state
    const subHead = `${foo} ${text}`

    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{subHead}</h2>
        <p>{this.state.foo}</p>
      </div>
    )
  }
}
