import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import companyReducer from '../redux/reducers/companyReducer';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    company: companyReducer
  },
});
