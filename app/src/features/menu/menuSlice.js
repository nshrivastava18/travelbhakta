import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: 'Home',
  activeSubMenu: 'home',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload.menu;
      state.activeSubMenu = action.payload.subMenu;
    },
  },
});

export const { setActiveMenu } = menuSlice.actions;
export const selectActiveMenu = (state) => state.menu.activeMenu;
export const selectActiveSubMenu = (state) => state.menu.activeSubMenu;

export default menuSlice.reducer;
