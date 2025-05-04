import React from 'react'
import './Button.css'

const Button = ({id, text, acao}) => {
  return (
    <button onClick={acao} id={id}>{text}</button>
  )
}

export default Button