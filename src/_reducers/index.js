import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { ingredients } from './ingredients.reducer';
import { filter } from './filter.reducer';
import { recipes } from './recipe.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  ingredients,
  filter,
  recipes
});

export default rootReducer;