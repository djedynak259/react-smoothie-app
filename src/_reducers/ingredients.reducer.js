function getId(state){
	return state.reduce((maxId, curr) => {
		return Math.max(curr.id, maxId)
	}, -1) + 1;
}

const init = [
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
	]

export function ingredients(state = init, action) {
	switch (action.type) {
		case 'ADD_INGREDIENT' :
			return [...state, {
					name: action.name,
					category: action.category,
					selected: false,
					id: getId(state)
				}]

		case 'CHOOSE_INGREDIENT' :
			return state.map(e=>{
				return e.id === action.id ? 
					Object.assign({}, e, {selected: !e.selected}) : e
			})

		case 'DELETE_INGREDIENT' :
			return

		default: return state;
	}
}