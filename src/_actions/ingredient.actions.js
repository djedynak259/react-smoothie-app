 const ingredientActions = {
	addIngredient(name,category){
		return {
			type: 'ADD_INGREDIENT',
			name: name,
			category: category
		}
	},

	chooseIngredient(id){
		return {
			type: 'CHOOSE_INGREDIENT',
			id: id
		}
	},

	deleteIngredient(id){
		return {
			type: 'DELETE_INGREDIENT',
			id: id
		}
	},

	selectRecipe(idArr){
		return {
			type: 'SELECT_RECIPE',
			idArr: idArr
		}
	}

}

export { ingredientActions }