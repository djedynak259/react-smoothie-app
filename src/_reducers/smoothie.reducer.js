function getId(state){
	return state.ingredients.reduce((maxId, curr) => {
		return Math.max(curr.id, maxId)
	}, -1) + 1;
}

const ingredients = 

export function ingredients(state = [], action) {
	switch (action.type) {
		case 'ADD_INGREDIENT' :
			return [...state, {
					name: action.name,
					category: action.category,
					selected: false,
					id: 'test'
				}]
			
// Fix id not as test

		case 'CHOOSE_INGREDIENT' :
			return state.map(e=>{
				return e.id === action.id ? 
					Object.assign({}, e, {selected: !e.selected}) : e
			})

		case 'DELETE_INGREDIENT' :
			return

		case 'CREATE_USER' :
			return Object.assign({}, state, {
				users:{
					username: state.users.username,
					id: action.id
				}
			})

		default: return state;
	}
}