import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ComponentC extends Component {
  render() {
    return <div>div</div>
    
    // return (
        // <UserConsumer>
        //     {
        //         (username) => {
        //             return (
        //                 <>
        //                 <div>ComponentC -- 3rd child : Hello {username}</div>
        //                 </>
        //             )
        //         }
        //     }
        // </UserConsumer>
    // )
  }
}

export default ComponentC