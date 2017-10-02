 const recipeActions = {

	saveRecipe(e) {
		return {
			type: 'SAVED_RECIPES',
			savedRecipes: e
		}
	}

}

export { recipeActions }