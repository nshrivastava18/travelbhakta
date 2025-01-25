const initialState = {
  activeMenu: 'Home',
  activeSubMenu: 'home',
};

const activeMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_MENU':
      return {
        ...state,
        activeMenu: action.payload.menu,
        activeSubMenu: action.payload.subMenu,
      };
    default:
      return state;
  }
};

export default activeMenuReducer;
