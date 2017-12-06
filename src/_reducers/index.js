import { combineReducers } from 'redux';
import { ingredients, recentSelection } from 'Containers/IngredientTable/reducers';
import { filter } from 'Containers/FilterIngredients/reducers';
import { savedRecipes, viewRecipeModal, saveRecipeModal } from 'Containers/RecipeSaveAndView/reducers';
import { addIngredientModal } from 'Containers/AddIngredient/reducers'

const rootReducer = combineReducers({
  ingredients,
  filter,
  recentSelection,
  savedRecipes,
  viewRecipeModal,
  saveRecipeModal,
  addIngredientModal
});

export default rootReducer;