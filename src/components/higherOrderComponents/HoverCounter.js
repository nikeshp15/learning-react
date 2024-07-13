import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count: 0
    //     }
    //   }
    
    // handlerMouseHover = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count+1}
    //     })
    // }
  render() {
    // const {count} = this.state;
    const {count, incrementCount} = this.props;

    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hover {count} times {this.props.name}</h2>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter, 10)