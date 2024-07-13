import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

 class ComponentB extends Component {
    static contextType = UserContext;

  render() {
    console.log('context----', this.context, typeof this.context, JSON.parse(this.context));
    return (
      <div>
        <div>ComponentB -- 2nd child : context (using contextType) {this.context}</div>
        <ComponentC></ComponentC>
      </div>
    )
  }
}

// ComponentB.contextType = UserContext;

export default ComponentB