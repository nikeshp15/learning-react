import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count+1}
    //     })
    // }
  render() {
    // const {count} = this.state;
    const {count, incrementCount} = this.props;

    return (
      <button onClick={incrementCount}>Clickd {count} times {this.props.name}</button>
    )
  }
}

export default UpdateComponent(ClickCounter, 5)