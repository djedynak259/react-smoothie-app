import { combineReducers } from 'redux';
import { ingredients } from 'Containers/IngredientTable/ingredients.reducer';
import { filter } from 'Containers/FilterIngredients/filter.reducer';
import { recentSelection } from 'Containers/IngredientTable/recentSelection.reducer';
import { recipes } from 'Containers/RecipeSaveAndView/recipe.reducer';
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