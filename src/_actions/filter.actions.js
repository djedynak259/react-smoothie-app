 const filterActions = {

	filterText(e) {
		return {
			type: 'FILTER_INGREDIENTS',
			filterText: e
		}
	}

}

export { filterActions }