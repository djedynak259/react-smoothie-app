export const saveRecipe = (arr) => {
	return {
		type: 'SAVED_RECIPES',
		loadSavedRecipes: arr
	}
}

export const selectRecipe = (idArr) => {
	return {
		type: 'SELECT_RECIPE',
		idArr: idArr
	}
}

export const suggestions = (e) => {
	return {
		type: 'SUGGEST_INGREDIENTS',
		suggestions: e
	}
}

export const modal_viewRecipes_openModal = () => {
	return {
		type: 'VIEW_RECIPE_MODAL_OPEN'
	}
}

export const modal_viewRecipes_closeModal = () => {
	return {
		type: 'VIEW_RECIPE_MODAL_CLOSE'
	}
}

export const modal_saveRecipe_openModal = () => {
	return {
		type: 'SAVE_RECIPE_MODAL_OPEN'
	}
}

export const modal_saveRecipe_closeModal = () => {
	return {
		type: 'SAVE_RECIPE_MODAL_CLOSE'
	}
}