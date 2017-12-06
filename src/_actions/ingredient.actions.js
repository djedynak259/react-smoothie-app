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