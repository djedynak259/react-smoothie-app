let init = {modalVisible:false}

export function addIngredientModal(state = init, action) {
  switch (action.type) {

    case 'ADD_INGREDIENT_MODAL_CLOSE':
      return {modalVisible : false}

    case 'ADD_INGREDIENT_MODAL_OPEN':
      return {modalVisible : true}  

    default:
      return state
  }
}