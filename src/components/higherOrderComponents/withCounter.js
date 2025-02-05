import React from 'react'

const UpdateComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCount = () => {
              this.setState(prevState => {
                  return {count: prevState.count+incrementNumber}
              })
          }

        render() {
            return <OriginalComponent name="nikesh" count={this.state.count} incrementCount={this.incrementCount}/>;
        }
    }
    return NewComponent
}

export default UpdateComponent;