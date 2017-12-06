let init = {modalVisible:false}

export function viewRecipeModal(state = init, action) {
  switch (action.type) {

    case 'VIEW_RECIPE_MODAL_CLOSE':
      return {modalVisible : false}

    case 'VIEW_RECIPE_MODAL_OPEN':
      return {modalVisible : true}  

    default:
      return state
  }
}