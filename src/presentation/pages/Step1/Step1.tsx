import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/organisms/Header/Header'
import RadioButton from '../../components/atoms/Radio/RadioButton'
import Select from '../../components/atoms/Select/Select'
import Button from '../../components/atoms/Button/Button'

import {
  YEAR_OPTIONS,
  MONTH_OPTIONS,
  DAY_OPTIONS,
} from '../../../plugins/definition'

const App: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <Header label="STEP1" text="お客様の情報を入力してください"></Header>
      <RadioButton
        name={'sex'}
        value={'男性'}
        id={'man'}
        onChange={(event) => console.log(event.target.value)}
      ></RadioButton>
      <RadioButton
        name={'sex'}
        value={'女性'}
        id={'women'}
        onChange={(event) => console.log(event.target.value)}
      ></RadioButton>
      <Select
        options={YEAR_OPTIONS}
        defaultOption="1990年(平成2)"
        onChange={(event) => console.log(event.target.value)}
      ></Select>
      <Select
        options={MONTH_OPTIONS}
        defaultOption="1"
        onChange={(event) => console.log(event.target.value)}
      ></Select>
      <Select
        options={DAY_OPTIONS}
        defaultOption="1"
        onChange={(event) => console.log(event.target.value)}
      ></Select>
      <Button text="次へ進む" onClick={() => history.push('/step2')}></Button>
    </>
  )
}

export default App
