import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'


const middlewares = []

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))


export default store
