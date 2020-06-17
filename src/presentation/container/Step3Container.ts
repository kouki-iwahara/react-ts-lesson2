import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setCustomerAction } from '../../store/action'
import Step3 from '../pages/Step3/Step3'
import { AppState } from '../../store/store'
import { State } from '../../store/reducer'

export interface ChangeEventHandler {
  handleOnChangeValue(value: State): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    content: appState.state.content,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOnChangeValue: (payload: State) => {
      const customerInfo = {
        content: payload.content,
      }
      dispatch(setCustomerAction.setCunstomerInfo(customerInfo))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step3)
