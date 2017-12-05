 const viewRecipeModalActions = {

	closeModal(e) {
		return {
			type: 'MODAL_CLOSE'
		}
	},

	openModal(e) {
		return {
			type: 'MODAL_OPEN'
		}
	},				
}

export { viewRecipeModalActions }