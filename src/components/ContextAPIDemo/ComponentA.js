import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
  render() {
    return (
      <div>
        <div>ComponentA -- 1st Child</div>
        <ComponentB></ComponentB>
      </div>
    )
  }
}

export default ComponentA