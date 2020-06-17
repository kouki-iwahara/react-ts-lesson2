import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setCustomerAction } from '../../store/action'
import Step1 from '../pages/Step1/Step1'
import { AppState } from '../../store/store'
import { State } from '../../store/reducer'

export interface ChangeEventHandler {
  handleOnChangeValue(value: State): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    sex: appState.state.sex,
    year: appState.state.year,
    month: appState.state.month,
    day: appState.state.day,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  console.log('dispatch')
  return {
    handleOnChangeValue: (payload: State) => {
      console.log({ payload })
      const customerInfo = {
        sex: payload.sex,
        year: payload.year,
        month: payload.month,
        day: payload.day,
      }
      dispatch(setCustomerAction.setCunstomerInfo(customerInfo))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step1)
