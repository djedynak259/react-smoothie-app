import { connect } from 'react-redux';
import { modal_addIngredient_openModal } from  './actions'
import Button_Main from '_components/Button_Main'

const mapStateToProps = (state) => {
  return {
  	value: 'Add Ingredient'
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(modal_addIngredient_openModal())
		}
	}	
}

const ButtonAddIngredient = connect(
	mapStateToProps,
	mapDispatchToProps
)(Button_Main)

export default ButtonAddIngredient