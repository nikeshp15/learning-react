import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} ${childName}`)
    }
  render() {
    const names = [{
      id: 1,
      name: 'nick'
    }, {
      id: 2,
      name: 'ekta'
    }, {
      id: 3,
      name: 'ank'
    }];

    return (
      <div>
        <ChildComponent grretHandler={this.greetParent}/>
        {
          names.map((person) => {
            return <h2 key={person.id}>{person.name}</h2>
          })
        }
      </div>
    )
  }
}

export default ParentComponent