import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ChangeEventHandler } from '../../container/Step2Container'
import { State } from '../../../store/reducer'
import Header from '../../components/organisms/Header/Header'
import RadioButton from '../../components/atoms/Radio/RadioButton'
import Button from '../../components/atoms/Button/Button'
import '../../styles/main.css'

const Step2: React.FC<State & ChangeEventHandler> = (props) => {
  const history = useHistory()
  const [isSecondQuestion, setIsSecondQuestion] = useState(false)
  const [isThirdQuestion, setIsThirdQuestion] = useState(false)
  const { question1, question2, question3, handleOnChangeValue } = { ...props }
  const showQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === '質問1' && !isSecondQuestion) {
      setIsSecondQuestion(true)
    } else if (event.target.name === '質問2' && !isThirdQuestion) {
      setIsThirdQuestion(true)
    }
  }
  const changeCustomerValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const customerInfo = {
      question1,
      question2,
      question3,
    }
    switch (event.target.name) {
      case '質問1':
        customerInfo.question1 = event.target.value
        break
      case '質問2':
        customerInfo.question2 = event.target.value
        break
      case '質問3':
        customerInfo.question3 = event.target.value
        break
      default:
        return customerInfo
    }
    handleOnChangeValue(customerInfo)
    showQuestion(event)
  }
  return (
    <>
      <Header label="STEP2" text="以下にお答えください"></Header>
      <div>生命保険に加入されていますか？</div>
      <RadioButton
        name={'質問1'}
        value={'はい'}
        id={'q1Yes'}
        onChange={(event) => changeCustomerValue(event)}
      ></RadioButton>
      <RadioButton
        name={'質問1'}
        value={'いいえ'}
        id={'q1No'}
        onChange={(event) => changeCustomerValue(event)}
      ></RadioButton>
      <div className={isSecondQuestion ? '' : 'hidden'}>
        <div>現在入院中ですか？3ヶ月以内に手術をすすめられましたか？</div>
        <RadioButton
          name={'質問2'}
          value={'はい'}
          id={'q2Yes'}
          onChange={(event) => changeCustomerValue(event)}
        ></RadioButton>
        <RadioButton
          name={'質問2'}
          value={'いいえ'}
          id={'q2No'}
          onChange={(event) => changeCustomerValue(event)}
        ></RadioButton>
      </div>
      <div className={isThirdQuestion ? '' : 'hidden'}>
        <div>5年以内に7以上入院しましたか？</div>
        <RadioButton
          name={'質問3'}
          value={'はい'}
          id={'q3Yes'}
          onChange={(event) => changeCustomerValue(event)}
        ></RadioButton>
        <RadioButton
          name={'質問3'}
          value={'いいえ'}
          id={'q3No'}
          onChange={(event) => changeCustomerValue(event)}
        ></RadioButton>
      </div>

      <div>
        <Button text="前へ戻る" onClick={() => history.push('/')}></Button>
        <Button text="次へ進む" onClick={() => history.push('/step3')}></Button>
      </div>
    </>
  )
}

export default Step2
