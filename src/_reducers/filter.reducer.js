let init = {
  filterText: ''
}

export function filter(state = init, action) {
  switch (action.type) {
    case 'FILTER_INGREDIENTS' :
      return {
        filterText: action.filterText
      }
    default:
      return state
  }
}
