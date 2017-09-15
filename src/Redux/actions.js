 let actions = {
	addIngredient(name,category){
		return {
			type: 'ADD_INGREDIENT',
			name: name,
			category: category
		}
	}
}

export default actions

// Other Option

// export const addIngredient = (name,category)=>{
// 		return {
// 			type: 'ADD_INGREDIENT',
// 			name: name,
// 			category: category
// 		}
// 	}