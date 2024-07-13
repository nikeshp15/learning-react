import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
      console.log('LifecycleA constructor call start----');
      this.state = {
        name: 'nikesh'
      }
      console.log('LifecycleA constructor call end');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleA componentDidUpdate');
    }
   
    onClickButton = () => {
        console.log('LifecycleA onClickButton');
        this.setState({ name: 'ekta' });
    }
  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB></LifecycleB>

        <br></br>
        <button onClick={this.onClickButton}>change state</button>
      </div>
    )
  }
}

export default LifecycleA