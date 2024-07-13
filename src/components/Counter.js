import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         isLoggedIn: false
      }
    }

    _incrementValue() {
        this.setState({
            count: this.state.count+1
        })
    }

    validateUser() {
        if (this.state.count > 0) {
            return this.state.count % 2 ? 'welcome nikesh' : 'welcome guest';
        }
        return '';
    }
    render() {
        return (
        <div>
            {/* <div>{this.validateUser()}</div> */}
            <div>{this.state.count % 2 ? 'welcome nikesh' : 'welcome guest'}</div>

            <div> ternary
                {
                    this.state.count % 2 ? 
                    <div> abc </div> : <div>xyz</div>
                }
            </div>

                short circuit operator

                {this.state.count % 2 && <div>Welcome nikesh</div>}

            <div>Count: {this.state.count}</div>
            <button onClick={() => this._incrementValue()}>increment</button>
        </div>
        )
    }
}

export default Counter