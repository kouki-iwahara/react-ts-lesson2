import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setCustomerAction } from '../../store/action'
import Step2 from '../pages/Step2/Step2'
import { AppState } from '../../store/store'
import { State } from '../../store/reducer'

export type ChangeEventHandler = {
  handleOnChangeValue(value: State): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    question1: appState.state.question1,
    question2: appState.state.question2,
    question3: appState.state.question3,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOnChangeValue: (payload: State) => {
      const customerInfo = {
        question1: payload.question1,
        question2: payload.question2,
        question3: payload.question3,
      }
      dispatch(setCustomerAction.setCunstomerInfo(customerInfo))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step2)
