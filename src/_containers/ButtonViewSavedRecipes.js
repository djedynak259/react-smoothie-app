import { connect } from 'react-redux';
import { modal_viewRecipes_openModal } from  '../_actions'
import Button_Main from '../_components/Button_Main'

const mapStateToProps = (state) => {
  return {
  	value: 'View Saved Recipes'
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(modal_viewRecipes_openModal())
		}
	}	
}

const ButtonViewSavedRecipes = connect(
	mapStateToProps,
	mapDispatchToProps
)(Button_Main)

export default ButtonViewSavedRecipes