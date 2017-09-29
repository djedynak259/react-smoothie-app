import { applyMiddleware, compose, createStore } from 'redux';
import {createLogger} from 'redux-logger'
import rootReducer from '../_reducers'

let finalCreateStore = compose(
		applyMiddleware(createLogger())
)(createStore)

export default function configureStore (initialState = { ingredients: [] }) {
	return finalCreateStore(rootReducer, initialState)
}