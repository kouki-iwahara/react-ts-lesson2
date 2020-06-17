import React from 'react'
import { useHistory } from 'react-router-dom'
import { ChangeEventHandler } from '../../container/Step1Container'
import { State } from '../../../store/reducer'
import Header from '../../components/organisms/Header/Header'
import RadioButton from '../../components/atoms/Radio/RadioButton'
import Select from '../../components/atoms/Select/select'
import Button from '../../components/atoms/Button/Button'

import {
  YEAR_OPTIONS,
  MONTH_OPTIONS,
  DAY_OPTIONS,
} from '../../../plugins/definition'

const Step1: React.FC<State & ChangeEventHandler> = (props) => {
  const history = useHistory()
  const { sex, year, month, day, handleOnChangeValue } = { ...props }
  const changeCustomerValue = (event: any) => {
    const customerInfo = {
      sex,
      year,
      month,
      day,
    }
    switch (event.target.name) {
      case 'sex':
        customerInfo.sex = event.target.value
        break
      case 'year':
        customerInfo.year = event.target.value.substr(0, 4)
        break
      case 'month':
        customerInfo.month = event.target.value
        break
      case 'day':
        customerInfo.day = event.target.value
        break
      default:
        return customerInfo
    }
    handleOnChangeValue(customerInfo)
  }
  return (
    <>
      <Header label="STEP1" text="お客様の情報を入力してください"></Header>
      <RadioButton
        name={'sex'}
        value={'男性'}
        id={'man'}
        onChange={(event) => {
          changeCustomerValue(event)
        }}
      ></RadioButton>
      <RadioButton
        name={'sex'}
        value={'女性'}
        id={'women'}
        onChange={(event) => changeCustomerValue(event)}
      ></RadioButton>
      <Select
        name="year"
        options={YEAR_OPTIONS}
        defaultOption="1990年(平成2)"
        onChange={(event) => changeCustomerValue(event)}
      ></Select>
      <Select
        name="month"
        options={MONTH_OPTIONS}
        defaultOption="1"
        onChange={(event) => changeCustomerValue(event)}
      ></Select>
      <Select
        name="day"
        options={DAY_OPTIONS}
        defaultOption="1"
        onChange={(event) => changeCustomerValue(event)}
      ></Select>
      <Button text="次へ進む" onClick={() => history.push('/step2')}></Button>
    </>
  )
}

export default Step1
