export const addIngredient = (name,category) => {
	return {
		type: 'ADD_INGREDIENT',
		name: name,
		category: category
	}
}

export const selectIngredient = (id) => {
	return {
		type: 'CHOOSE_INGREDIENT',
		id: id
	}
}

export const deleteIngredient = (id) => {
	return {
		type: 'DELETE_INGREDIENT',
		id: id
	}
}

export const selectRecipe = (idArr) => {
	return {
		type: 'SELECT_RECIPE',
		idArr: idArr
	}
}