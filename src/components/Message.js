import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'welcome visitor',
            param2: 'abc'
        };
    }

    _changeMessage() {
        this.setState({
            message: 'thanks for subscribing'
        })
    }

    render() {
        // destructuring props or state
        // const {message, param2} = this.state;
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this._changeMessage()}>subscribe</button>
            </div>
        );
    }
}

export default Message;