import React from 'react'

function Hero({heroname}) {
    if (heroname === 'joker') {
        throw new Error('Nikesh this is not a hero CUSTOM ERROR')
    }
  return (
    <div>{heroname}</div>
  )
}

export default Hero