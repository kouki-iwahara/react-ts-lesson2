import React from 'react'
import Step1 from '../pages/Step1/Step1'
import Step2 from '../pages/Step2/Step2'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Step1}></Route>
      <Route exact path="/step2" component={Step2}></Route>
    </Router>
  )
}

export default AppRouter
