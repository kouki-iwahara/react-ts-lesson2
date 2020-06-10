import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/organisms/Header/Header'
import TextArea from '../../components/atoms/TextArea/TextArea'
import Button from '../../components/atoms/Button/Button'

const Step3: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <Header label="STEP3" text="ご相談内容をご記入ください"></Header>
      <div>ご相談内容</div>
      <TextArea></TextArea>
      <div>
        <Button text="前へ戻る" onClick={() => history.push('/step2')}></Button>
        <Button text="次へ進む" onClick={() => console.log('clicked')}></Button>
      </div>
    </>
  )
}

export default Step3
