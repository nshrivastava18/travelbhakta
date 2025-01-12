import { combineReducers } from 'redux';
import activeMenuReducer from './activeMenuReducer';
// ...existing code...

const rootReducer = combineReducers({
  activeMenu: activeMenuReducer,
  // ...existing reducers...
});

export default rootReducer;
