export const saveRecipe = (arr) => {
	return {
		type: 'SAVED_RECIPES',
		loadSavedRecipes: arr
	}
}

export const suggestions = (e) => {
	return {
		type: 'SUGGEST_INGREDIENTS',
		suggestions: e
	}
}