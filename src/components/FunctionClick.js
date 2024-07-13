import React from 'react'

function FunctionClick() {

    function clickHandler(event) {
        console.log('button clicked', event);
    }

  return (
    <div>
        function component

<div><button onClick={clickHandler}>Click</button></div>
    </div>
  )
}

export default FunctionClick