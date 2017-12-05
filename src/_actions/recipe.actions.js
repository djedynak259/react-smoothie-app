export const saveRecipe = (text) => {
	return {
		type: 'SAVED_RECIPES',
		savedRecipes: text
	}
}

export const suggestions = (e) => {
	return {
		type: 'SUGGEST_INGREDIENTS',
		suggestions: e
	}
}