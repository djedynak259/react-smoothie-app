export default actions = {
	addIngredient(text){
		return {
			type: 'ADD_INGREDIENT',
			name: text.name,
			category: text.category
		}
	}
}

store.dispatch(addIngredient('text'))