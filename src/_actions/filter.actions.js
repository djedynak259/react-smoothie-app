 const filterActions = {

	filterText(e) {
		return {
			type: 'FILTER_INGREDIENTS',
			filterText: e
		}
	},

	recentSelection(name) {
		return {
			type: 'RECENT_SELECTION',
			name: name
		}
	}	

}

export { filterActions }