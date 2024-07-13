import React from 'react'

function ChildComponent(props) {

  return (
    <div>
        <button onClick={() => props.grretHandler('nik')}>Grrent Parent</button>
    </div>
  )
}

export default ChildComponent