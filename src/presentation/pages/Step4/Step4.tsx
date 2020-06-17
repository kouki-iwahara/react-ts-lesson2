import React from 'react'
import { useHistory } from 'react-router-dom'
import { State } from '../../../store/reducer'
import Header from '../../components/organisms/Header/Header'
import Button from '../../components/atoms/Button/Button'

const Step4: React.FC<State> = (props) => {
  const history = useHistory()
  const { sex, year, month, day, question1, question2, question3, content } = {
    ...props,
  }
  return (
    <>
      <Header label="STEP4" text="以下の内容をご確認ください"></Header>
      <div>性別</div>
      <div>{sex}</div>
      =========
      <div>生年月日</div>
      <div>
        {year}年{month}月{day}日
      </div>
      =========
      <div>現在、生命保険に加入されてますか？</div>
      <div>{question1}</div>
      =========
      <div>現在入院中ですか？</div>
      <div>{question2}</div>
      =========
      <div>過去5年以内に入院しましたか？</div>
      <div>{question3}</div>
      =========
      <div>ご相談内容</div>
      <div>{content}</div>
      =========
      <div>
        <Button text="前へ戻る" onClick={() => history.push('/step3')}></Button>
        <Button text="送信" onClick={() => console.log('clicked')}></Button>
      </div>
    </>
  )
}

export default Step4
