import { combineReducers } from 'redux';
import { ingredients } from './ingredients.reducer';
import { filter } from './filter.reducer';
import { recipes } from './recipe.reducer';
import { viewRecipeModal} from './viewRecipeModal.reducer'

const rootReducer = combineReducers({
  ingredients,
  filter,
  recipes,
  viewRecipeModal
});

export default rootReducer;