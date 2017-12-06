import { connect } from 'react-redux';
import { modal_saveRecipe_openModal } from  './actions'
import Button_Main from '_components/Button_Main'

const mapStateToProps = (state) => {
  return {
  	value: 'Save Recipe',
  	class: 'button'
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(modal_saveRecipe_openModal())
		}
	}	
}

const ButtonSaveRecipe = connect(
	mapStateToProps,
	mapDispatchToProps
)(Button_Main)

export default ButtonSaveRecipe