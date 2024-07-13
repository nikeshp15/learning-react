import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello w'
      }
    }

    _clickHandler(event, param1) {
        console.log(event, param1)
        this.setState({
            message: `good bye ${param1}`
        })
    }

    handler = (event, param1) => {
        console.log(event, param1)

        this.setState({
            message: `good bye ${param1}`
        })
    };

    render() {
        return (
            <div>
                class component
                <div>{this.state.message}</div>
                <div><button onClick={() => this._clickHandler(this, 'nick')}>Click</button></div>
                <div><button onClick={() => this.handler(this, 'ekta')}>Click handler</button></div>
            </div>
        )
    }
}

export default EventBind