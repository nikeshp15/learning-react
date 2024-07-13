import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
    const {count, incrementCount} = this.props;

    return (
      <button onClick={incrementCount}>Clickd {count} times {this.props.name}</button>
    )
  }
}

export default ClickCounterTwo