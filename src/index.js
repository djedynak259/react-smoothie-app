import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {store} from './Redux/store.js'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let initialState = {
	users: {
		username: 'dan',
		id:7
	}
} 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);
registerServiceWorker();
