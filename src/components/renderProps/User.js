import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <div>{this.props.render(false)}</div>
      </div>
    )
  }
}

export default User