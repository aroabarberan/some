import { createStore, combineReducers, applyMiddleware } from 'redux'
import immutable from "redux-immutable-state-invariant"
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from "redux-logger"
import { notes } from './reducers/noteReducer'
import { reducer as form } from 'redux-form'


export default createStore(
  combineReducers({ 
    notes,
    form
  }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)

