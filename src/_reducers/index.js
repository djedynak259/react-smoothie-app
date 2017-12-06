import { combineReducers } from 'redux';
import { ingredients } from 'Containers/IngredientTable/ingredients.reducer';
import { filter } from 'Containers/FilterIngredients/filter.reducer';
import { recentSelection } from 'Containers/IngredientTable/recentSelection.reducer';
import { savedRecipes, viewRecipeModal, saveRecipeModal } from 'Containers/RecipeSaveAndView/reducers';
import { addIngredientModal } from 'Containers/AddIngredient/addIngredientModal.reducer'

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