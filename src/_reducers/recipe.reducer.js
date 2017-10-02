let init = {savedRecipes: []}

export function recipes(state = init, action) {
  switch (action.type) {
    case 'SAVED_RECIPES':
      return { savedRecipes: action.savedRecipes };
    default:
      return state
  }
}