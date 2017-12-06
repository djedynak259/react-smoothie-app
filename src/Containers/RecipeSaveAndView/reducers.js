export function savedRecipes(state = {savedRecipes: []}, action) {
  switch (action.type) {

    case 'SAVED_RECIPES':
      return { savedRecipes: action.loadSavedRecipes }

    // case 'SUGGEST_INGREDIENTS' :
    //   return Object.assign({}, state, { suggestions: action.suggestions });

    default:
      return state
  }
}

export function saveRecipeModal(state = {modalVisible:false}, action) {
  switch (action.type) {

    case 'SAVE_RECIPE_MODAL_CLOSE':
      return {modalVisible : false}

    case 'SAVE_RECIPE_MODAL_OPEN':
      return {modalVisible : true}  

    default:
      return state
  }
}

export function viewRecipeModal(state = {modalVisible:false}, action) {
  switch (action.type) {

    case 'VIEW_RECIPE_MODAL_CLOSE':
      return {modalVisible : false}

    case 'VIEW_RECIPE_MODAL_OPEN':
      return {modalVisible : true}  

    default:
      return state
  }
}