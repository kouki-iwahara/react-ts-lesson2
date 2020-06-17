import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { setCustomerAction } from './action'

export type State = {
  sex?: string
  year?: string
  month?: string
  day?: string
  question1?: string
  question2?: string
  question3?: string
  content?: string
}

export const initialState: State = {
  sex: '',
  year: '1990',
  month: '1',
  day: '1',
  question1: '',
  question2: '',
  question3: '',
  content: '',
}

export const reducer = reducerWithInitialState<State>(initialState).case(
  setCustomerAction.setCunstomerInfo,
  (state, customerValue) => {
    return { ...state, ...customerValue }
  }
)
