let init = {
  filterText: '',
  recentSelection: 'Select Ingredient'
}

export function filter(state = init, action) {
  switch (action.type) {
    case 'FILTER_INGREDIENTS' :
      return Object.assign({}, state, {filterText: action.filterText})
    case 'RECENT_SELECTION' :
      return Object.assign({}, state, {recentSelection: action.name})
        recentSelection: action.id      
    default:
      return state
  }
}
