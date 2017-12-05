export const saveRecipe = (e) => {
	return {
		type: 'SAVED_RECIPES',
		savedRecipes: e
	}
}

export const suggestions = (e) => {
	return {
		type: 'SUGGEST_INGREDIENTS',
		suggestions: e
	}
}