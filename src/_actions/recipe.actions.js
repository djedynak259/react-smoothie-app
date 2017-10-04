 const recipeActions = {

	saveRecipe(e) {
		return {
			type: 'SAVED_RECIPES',
			savedRecipes: e
		}
	},

	closeModal(e) {
		return {
			type: 'MODAL_CLOSE'
		}
	},

	openModal(e) {
		return {
			type: 'MODAL_OPEN'
		}
	}			

}

export { recipeActions }