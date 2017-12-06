export const modal_addIngredient_openModal = () => {
	return {
		type: 'ADD_INGREDIENT_MODAL_OPEN'
	}
}

export const modal_addIngredient_closeModal = () => {
	return {
		type: 'ADD_INGREDIENT_MODAL_CLOSE'
	}
}

export const addIngredient = (name,category) => {
	return {
		type: 'ADD_INGREDIENT',
		name: name,
		category: category
	}
}