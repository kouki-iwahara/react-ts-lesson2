import React from 'react'

type TProp = {
  options: string[]
  defaultOption: string | number
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<TProp> = (props) => {
  const { options, defaultOption, onChange } = props
  return (
    <div>
      <select
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
