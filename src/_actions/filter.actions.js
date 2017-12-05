export const filterText = (e) => {
	return {
		type: 'FILTER_INGREDIENTS',
		filterText: e
	}
}	

export const recentSelection = (name) => {
	return {
		type: 'RECENT_SELECTION',
		name: name
	}
}