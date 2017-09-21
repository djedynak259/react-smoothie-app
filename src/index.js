import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './Redux/store.js'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let initialState = {
	ingredients: [
	  {category: 'Base', name: 'Banana', id:1, selected:false},
	  {category: 'Base', name: 'Coconut', id:2, selected:false},
	  {category: 'Base', name: 'Yerba Mate', id:3, selected:false},
	  {category: 'Base', name: 'Nut Milk', id:4, selected:false},
	  {category: 'Base', name: 'Seed Milk', id:5, selected:false},
	  {category: 'Liquid', name: 'Almond Milk', id:6, selected:false},
	  {category: 'Liquid', name: 'Organic Fruit Juice', id:7, selected:false},
	  {category: 'Fruits/Veg', name: 'Spinach', id:8, selected:false},
	  {category: 'Fruits/Veg', name: 'Kale', id:9, selected:false},
	  {category: 'Fruits/Veg', name: 'Strawberry', id:10, selected:false},
	  {category: 'Fruits/Veg', name: 'Blueberry', id:11, selected:false},
	  {category: 'Add-Ons', name: 'Maca', id:12, selected:false},
	  {category: 'Add-Ons', name: 'Cacao', id:13, selected:false},
	  {category: 'Add-Ons', name: 'Spirulina', id:14, selected:false},
	  {category: 'Add-Ons', name: 'Acai Powder', id:15, selected:false},
	  {category: 'Add-Ons', name: 'Greens', id:16, selected:false},
	  {category: 'Add-Ons', name: 'Cinnamon', id:17, selected:false},
	  {category: 'Add-Ons', name: 'Vanilla', id:18, selected:false},
	  {category: 'Add-Ons', name: 'Cucumbers', id:19, selected:false},
	  {category: 'Add-Ons', name: 'Beets', id:20, selected:false},
	  {category: 'Add-Ons', name: 'Ginger Root', id:21, selected:false},	  
	  {category: 'Fats & Proteins', name: 'Nuts', id:22, selected:false},
	  {category: 'Fats & Proteins', name: 'Hemp Seeds', id:23, selected:false},
	  {category: 'Fats & Proteins', name: 'Chai Seeds', id:24, selected:false},
	  {category: 'Fats & Proteins', name: 'Avocado', id:25, selected:false},
	  {category: 'Fats & Proteins', name: 'Sprouts', id:26, selected:false}
	],
	users: {
		username: 'dan',
		id:7
	}
} 

let store = configureStore(initialState)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);
registerServiceWorker();
