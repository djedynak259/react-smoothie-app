export function filter(state = {filterText: ''}, action) {

  switch (action.type) {

    case 'FILTER_INGREDIENTS' :
      return {filterText: action.filterText}

    default:
      return state
  }
}