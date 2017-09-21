 let actions = {
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

	createNewUser(){
		return {
			type: 'CREATE_USER',
			id: Math.random().slice(0,2)*100
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