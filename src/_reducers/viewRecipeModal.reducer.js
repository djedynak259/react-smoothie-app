let init = {modalVisible:false}

export function viewRecipeModal(state = init, action) {
  switch (action.type) {

    case 'MODAL_CLOSE':
      return {modalVisible : false}

    case 'MODAL_OPEN':
      return {modalVisible : true}  

    default:
      return state
  }
}