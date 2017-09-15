function getId(state){
	return state.ingredients.reduce((maxId, curr) => {
		return Math.max(curr.id, maxId)
	}, -1) + 1;
}

export default function reducer(state, action) {
	switch (action.type) {
		case 'ADD_INGREDIENT' :
			Object.assign({}, state, {
				ingredients: [{
					name: action.name,
					category: action.category,
					id: getId(state)
				}, ...state.ingredients],
			})
		default: return state;
	}
}