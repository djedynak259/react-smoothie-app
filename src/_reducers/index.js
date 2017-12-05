import { combineReducers } from 'redux';
import { ingredients } from './ingredients.reducer';
import { filter } from './filter.reducer';
import { recipes } from './recipe.reducer';
import { viewRecipeModal} from './viewRecipeModal.reducer'
import { saveRecipeModal } from './saveRecipeModal.reducer'
import { addIngredientModal } from './addIngredientModal.reducer'

const rootReducer = combineReducers({
  ingredients,
  filter,
  recipes,
  viewRecipeModal,
  saveRecipeModal,
  addIngredientModal
});

export default rootReducer;