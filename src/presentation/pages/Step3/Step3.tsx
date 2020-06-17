import React from 'react'
import { useHistory } from 'react-router-dom'
import { ChangeEventHandler } from '../../container/Step3Container'
import { State } from '../../../store/reducer'
import Header from '../../components/organisms/Header/Header'
import TextArea from '../../components/atoms/TextArea/TextArea'
import Button from '../../components/atoms/Button/Button'

const Step3: React.FC<State & ChangeEventHandler> = (props) => {
  const history = useHistory()
  const { content, handleOnChangeValue } = { ...props }
  const changeCustomerValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const customerInfo = {
      content: e.target.value,
    }
    handleOnChangeValue(customerInfo)
  }
  return (
    <>
      <Header label="STEP3" text="ご相談内容をご記入ください"></Header>
      <div>ご相談内容</div>
      <TextArea
        value=""
        onChange={(event) => changeCustomerValue(event)}
      ></TextArea>
      <div>
        <Button text="前へ戻る" onClick={() => history.push('/step2')}></Button>
        <Button text="次へ進む" onClick={() => history.push('/step4')}></Button>
      </div>
    </>
  )
}

export default Step3
