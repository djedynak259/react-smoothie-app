import { applyMiddleware, compose, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import ingredients from '../_reducers/smoothie.reducer.js'

let finalCreateStore = compose(
		applyMiddleware(createLogger())
)(createStore)

export default function configureStore (initialState = { ingredients: [] }) {
	return finalCreateStore(ingredients, initialState)
}