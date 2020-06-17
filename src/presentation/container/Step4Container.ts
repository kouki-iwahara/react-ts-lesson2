import { connect } from 'react-redux'
import Step4 from '../pages/Step4/Step4'
import { AppState } from '../../store/store'

const mapStateToProps = (appState: AppState) => {
  return {
    sex: appState.state.sex,
    year: appState.state.year,
    month: appState.state.month,
    day: appState.state.day,
    question1: appState.state.question1,
    question2: appState.state.question2,
    question3: appState.state.question3,
    content: appState.state.content,
  }
}
export default connect(mapStateToProps, null)(Step4)
