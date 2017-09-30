let init = {
  filterText: '',
  recentSelection: null
}

export function filter(state = init, action) {
  switch (action.type) {
    case 'FILTER_INGREDIENTS' :
      return {
        filterText: action.filterText
      }
    case 'RECENT_SELECTION' :
      return {
        recentSelection: action.id
      }      
    default:
      return state
  }
}
