import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './_helpers/store.js'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {IngredientApp} from 'Containers/App/IngredientApp';
import './index.css';
import './App.css';


ReactDOM.render(
	<Provider store={store}>
		<IngredientApp />
	</Provider>
	, document.getElementById('root')
);
registerServiceWorker();
