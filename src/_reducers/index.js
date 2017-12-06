import { combineReducers } from 'redux';
import { ingredients } from './ingredients.reducer';
import { filter } from 'Containers/FilterIngredients/filter.reducer';
import { recentSelection } from './recentSelection.reducer';
import { recipes } from './recipe.reducer';
import { viewRecipeModal} from 'Containers/RecipeSaveAndView/viewRecipeModal.reducer'
import { saveRecipeModal } from 'Containers/RecipeSaveAndView/saveRecipeModal.reducer'
import { addIngredientModal } from 'Containers/AddIngredient/addIngredientModal.reducer'

const rootReducer = combineReducers({
  ingredients,
  filter,
  recentSelection,
  recipes,
  viewRecipeModal,
  saveRecipeModal,
  addIngredientModal
});

export default rootReducer;