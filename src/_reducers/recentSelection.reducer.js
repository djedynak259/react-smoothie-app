let init = {
  recentSelection: 'Select Ingredient'
}

export function recentSelection(state = init, action) {

  switch (action.type) {

    case 'RECENT_SELECTION' :
      return {recentSelection: action.name}

    default:
      return state
  }
}