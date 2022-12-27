import React from 'react'

export default function Fcomponent(props) {
  return (
    <div>
        <h2>Hello {props.name}, you are happy?</h2>
    </div>
  )
}

Fcomponent.defaultProps = { name: 'none' }