 const filterActions = {

	filterText(e) {
		return {
			type: 'FILTER_INGREDIENTS',
			filterText: e
		}
	},

	recentSelection(id) {
		return {
			type: 'RECENT_SELECTION',
			id: id
		}
	}	

}

export { filterActions }