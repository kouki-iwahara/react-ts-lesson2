import React from 'react'

type TProp = {
  text: string
  onClick: () => void
}

const Button: React.FC<TProp> = (props) => {
  const { text, onClick } = props
  return <button onClick={onClick}>{text}</button>
}

export default Button
