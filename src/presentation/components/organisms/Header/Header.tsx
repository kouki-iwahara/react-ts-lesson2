import React from 'react'

type TProp = {
  label: 'STEP1' | 'STEP2' | 'STEP3' | 'STEP4'
  text: string
}

const Header: React.FC<TProp> = (props) => {
  const { label, text } = props
  return (
    <>
      <div>
        <span>{label}</span>
        <span>{text}</span>
      </div>
    </>
  )
}

export default Header
