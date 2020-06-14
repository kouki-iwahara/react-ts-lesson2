import React from 'react'

type TProp = {
  name: string
  value: string
  id: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<TProp> = (props) => {
  const { name, value, id, onChange } = props
  return (
    <>
      <input
        name={name}
        type="radio"
        value={value}
        id={id}
        onChange={(event) => onChange(event)}
      />
      <label htmlFor={id}>{value}</label>
    </>
  )
}

export default RadioButton
