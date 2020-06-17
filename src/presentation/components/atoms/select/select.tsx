import React from 'react'

type TProp = {
  name: string
  options: string[]
  defaultOption: string | number
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<TProp> = (props) => {
  const { name, options, defaultOption, onChange } = props
  return (
    <div>
      <select
        name={name}
        multiple={false}
        defaultValue={defaultOption}
        onChange={(event) => onChange(event)}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
