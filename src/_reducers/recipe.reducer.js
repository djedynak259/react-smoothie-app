let init = {savedRecipes: []}

export function recipes(state = init, action) {
  switch (action.type) {

    case 'SAVED_RECIPES':
      return Object.assign({}, state, { savedRecipes: action.savedRecipes });

    // case 'SUGGEST_INGREDIENTS' :
    //   return Object.assign({}, state, { suggestions: action.suggestions });

    default:
      return state
  }
}