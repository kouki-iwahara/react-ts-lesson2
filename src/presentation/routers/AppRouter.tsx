import React from 'react'
import Step1Container from '../container/Step1Container'
import Step2Container from '../container/Step2Container'
import Step3Container from '../container/Step3Container'
import Step4Container from '../container/Step4Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
const AppRouter: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Step1Container}></Route>
        <Route exact path="/step2" component={Step2Container}></Route>
        <Route exact path="/step3" component={Step3Container}></Route>
        <Route exact path="/step4" component={Step4Container}></Route>
      </Router>
    </Provider>
  )
}

export default AppRouter
