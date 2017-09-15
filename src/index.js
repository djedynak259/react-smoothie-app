import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './Redux/store.js'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let initialState = {
	ingredients: [
	  {category: 'Base', name: 'Banana'},
	  {category: 'Base', name: 'Coconut'},
	  {category: 'Base', name: 'Yerba Mate'},
	  {category: 'Base', name: 'Nut Milk'},
	  {category: 'Base', name: 'Seed Milk'},
	  {category: 'Liquid', name: 'Almond Milk'},
	  {category: 'Liquid', name: 'Organic Fruit Juice'},
	  {category: 'Fruits/Veg', name: 'Spinach'},
	  {category: 'Fruits/Veg', name: 'Kale'},
	  {category: 'Fruits/Veg', name: 'Strawberry'},
	  {category: 'Fruits/Veg', name: 'Blueberry'},
	  {category: 'Add-Ons', name: 'Maca'},
	  {category: 'Add-Ons', name: 'Cacao'},
	  {category: 'Add-Ons', name: 'Spirulina'},
	  {category: 'Add-Ons', name: 'Acai Powder'},
	  {category: 'Add-Ons', name: 'Greens'},
	  {category: 'Add-Ons', name: 'Cinnamon'},
	  {category: 'Add-Ons', name: 'Vanilla'},
	  {category: 'Add-Ons', name: 'Cucumbers'},
	  {category: 'Add-Ons', name: 'Beets'},
	  {category: 'Add-Ons', name: 'Ginger Root'},	  
	  {category: 'Fats & Proteins', name: 'Nuts'},
	  {category: 'Fats & Proteins', name: 'Hemp Seeds'},
	  {category: 'Fats & Proteins', name: 'Chai Seeds'},
	  {category: 'Fats & Proteins', name: 'Avocado'},
	  {category: 'Fats & Proteins', name: 'Sprouts'}
	]
} 

let store = configureStore(initialState)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);
registerServiceWorker();
