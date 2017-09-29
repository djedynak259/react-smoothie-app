import { applyMiddleware, compose, createStore } from 'redux';
// Add redux Thunk
// import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducer from '../_reducers'

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        // thunkMiddleware,
        loggerMiddleware
    )
);


// let finalCreateStore = compose(
// 		applyMiddleware(createLogger())
// )(createStore)

// export default function configureStore (initialState = { ingredients: [] }) {
// 	return finalCreateStore(rootReducer, initialState)
// }