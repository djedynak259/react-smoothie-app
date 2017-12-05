export const filterText = (text) => {
	return {
		type: 'FILTER_INGREDIENTS',
		filterText: text
	}
}	

export const recentSelection = (name) => {
	return {
		type: 'RECENT_SELECTION',
		name: name
	}
}