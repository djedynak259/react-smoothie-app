 const recipeActions = {

	saveRecipe(e) {
		return {
			type: 'SAVED_RECIPES',
			savedRecipes: e
		}
	},

	suggestions(e) {
		return {
			type: 'SUGGEST_INGREDIENTS',
			suggestions: e
		}
	}					

}

export { recipeActions }