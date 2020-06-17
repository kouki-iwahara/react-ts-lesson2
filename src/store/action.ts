import { actionCreatorFactory } from 'typescript-fsa'
import { State } from './reducer'
import types from './types'
const actionCreator = actionCreatorFactory()

export const setCustomerAction = {
  setCunstomerInfo: actionCreator<State>(types.setCustomerInfo),
}
