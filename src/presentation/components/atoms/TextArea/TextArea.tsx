import React from 'react'

type TProp = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArera: React.FC<TProp> = (props) => {
  const { value, onChange } = { ...props }

  return (
    <textarea
      name=""
      id=""
      defaultValue={value}
      onChange={(event) => onChange(event)}
    ></textarea>
  )
}

export default TextArera
