import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/main.css'
import Header from '../../components/organisms/Header/Header'
import RadioButton from '../../components/atoms/Radio/RadioButton'
import Button from '../../components/atoms/Button/Button'

const Step2: React.FC = () => {
  const history = useHistory()
  const [isSecondQuestion, setIsSecondQuestion] = useState(false)
  const [isThirdQuestion, setIsThirdQuestion] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === '質問1' && !isSecondQuestion) {
      setIsSecondQuestion(true)
    } else if (e.target.name === '質問2' && !isThirdQuestion) {
      setIsThirdQuestion(true)
    }
  }
  return (
    <>
      <Header label="STEP2" text="以下にお答えください"></Header>
      <div>生命保険に加入されていますか？</div>
      <RadioButton
        name={'質問1'}
        value={'はい'}
        id={'q1Yes'}
        onChange={(event) => handleChange(event)}
      ></RadioButton>
      <RadioButton
        name={'質問1'}
        value={'いいえ'}
        id={'q1No'}
        onChange={(event) => handleChange(event)}
      ></RadioButton>
      <div className={isSecondQuestion ? '' : 'hidden'}>
        <div>現在入院中ですか？3ヶ月以内に手術をすすめられましたか？</div>
        <RadioButton
          name={'質問2'}
          value={'はい'}
          id={'q2Yes'}
          onChange={(event) => handleChange(event)}
        ></RadioButton>
        <RadioButton
          name={'質問2'}
          value={'いいえ'}
          id={'q2No'}
          onChange={(event) => handleChange(event)}
        ></RadioButton>
      </div>
      <div className={isThirdQuestion ? '' : 'hidden'}>
        <div>5年以内に7以上入院しましたか？</div>
        <RadioButton
          name={'質問3'}
          value={'はい'}
          id={'q3Yes'}
          onChange={(event) => console.log(event.target.value)}
        ></RadioButton>
        <RadioButton
          name={'質問3'}
          value={'いいえ'}
          id={'q3No'}
          onChange={(event) => console.log(event.target.value)}
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
