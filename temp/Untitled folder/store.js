import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createHero } from './actions/hero';
import { getHeroes } from './service/heroService';

const middlewares = []

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

const initializeStore = () => {
  getHeroes()
    .then(({ results }) => results.map(hero => store.dispatch(createHero(hero))))
}

initializeStore()

export default store
