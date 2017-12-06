let init = {modalVisible:false}

export function saveRecipeModal(state = init, action) {
  switch (action.type) {

    case 'SAVE_RECIPE_MODAL_CLOSE':
      return {modalVisible : false}

    case 'SAVE_RECIPE_MODAL_OPEN':
      return {modalVisible : true}  

    default:
      return state
  }
}