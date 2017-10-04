let init = {savedRecipes: [], visible:false, suggestions: []}

export function recipes(state = init, action) {
  switch (action.type) {

    case 'SAVED_RECIPES':
      return Object.assign({}, state, { savedRecipes: action.savedRecipes });

    case 'MODAL_CLOSE':
      return Object.assign({}, state, {visible : false});

    case 'MODAL_OPEN':
      return Object.assign({}, state, {visible : true});  

    case 'SUGGEST_INGREDIENTS' :
      return Object.assign({}, state, { suggestions: action.suggestions });

    default:
      return state
  }
}